/**
 * Anti-Cold-Storage Self-Pinger Utility
 * 
 * Render free web services spin down after 15 minutes of inactivity.
 * This utility sends an automated HTTP GET request to its public health endpoint
 * every 14 minutes during a configured 12-hour active window (default: 9:00 AM – 9:00 PM IST)
 * to keep the server awake during peak hours while allowing it to rest during the other 12 hours.
 */

let keepAliveInterval = null;
let retryTimeout = null;

function getCurrentHourInTimezone(timeZone = 'Asia/Kolkata') {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: 'numeric',
      hour12: false
    });
    const parts = formatter.formatToParts(new Date());
    const hourPart = parts.find(p => p.type === 'hour');
    return parseInt(hourPart?.value || '0', 10);
  } catch {
    return new Date().getHours();
  }
}

function isWithinActiveHours() {
  const startHour = parseInt(process.env.KEEP_ALIVE_START_HOUR || '9', 10);   // 9 AM
  const endHour = parseInt(process.env.KEEP_ALIVE_END_HOUR || '21', 10);      // 9 PM (12 hours active window: 9 to 21)
  const timeZone = process.env.KEEP_ALIVE_TIMEZONE || 'Asia/Kolkata';

  const currentHour = getCurrentHourInTimezone(timeZone);

  if (startHour < endHour) {
    return currentHour >= startHour && currentHour < endHour;
  } else if (startHour > endHour) {
    return currentHour >= startHour || currentHour < endHour;
  }
  return true;
}

export function startKeepAlive() {
  if (keepAliveInterval) return;

  const rawUrl = process.env.SERVER_URL || process.env.RENDER_EXTERNAL_URL || 'https://api-portfolio.sickykumar.in';
  const baseUrl = rawUrl.replace(/\/$/, '');
  const healthUrl = `${baseUrl}/health`;

  const intervalMinutes = Math.max(1, parseInt(process.env.KEEP_ALIVE_INTERVAL_MINUTES || '14', 10));
  const intervalMs = intervalMinutes * 60 * 1000;
  const startHour = process.env.KEEP_ALIVE_START_HOUR || '9';
  const endHour = process.env.KEEP_ALIVE_END_HOUR || '21';
  const timeZone = process.env.KEEP_ALIVE_TIMEZONE || 'Asia/Kolkata';

  console.log(`[KeepAlive] Automated keep-alive service initialized.`);
  console.log(`[KeepAlive] Target endpoint: ${healthUrl}`);
  console.log(`[KeepAlive] Heartbeat interval: Every ${intervalMinutes} minute(s).`);
  console.log(`[KeepAlive] Active window: ${startHour}:00 - ${endHour}:00 (12 hours/day in ${timeZone}).`);

  const pingServer = async (isRetry = false) => {
    // Check if within the 12-hour active window
    if (!isWithinActiveHours()) {
      console.log(`[KeepAlive] Outside active 12-hour window (${startHour}:00 - ${endHour}:00 ${timeZone}). Skipping ping to allow sleep mode.`);
      return;
    }

    const startTime = Date.now();
    try {
      const res = await fetch(healthUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'Portfolio-AntiColdStorage-Heartbeat/1.0',
          'Accept': 'application/json'
        },
        // Timeout after 15 seconds
        signal: AbortSignal.timeout(15000)
      });

      const duration = Date.now() - startTime;

      if (res.ok) {
        console.log(`[KeepAlive] Heartbeat successful (Status: ${res.status}, Latency: ${duration}ms, Time: ${new Date().toLocaleTimeString('en-IN', { timeZone })})`);
      } else {
        console.warn(`[KeepAlive] Server returned status ${res.status} after ${duration}ms`);
        scheduleRetry();
      }
    } catch (err) {
      console.warn(`[KeepAlive] Ping failed (${err.name}: ${err.message}). Scheduling retry...`);
      scheduleRetry();
    }
  };

  const scheduleRetry = () => {
    if (retryTimeout) clearTimeout(retryTimeout);
    // Retry in 30 seconds if ping failed and still within active window
    retryTimeout = setTimeout(() => {
      if (isWithinActiveHours()) {
        console.log('[KeepAlive] Attempting retry ping...');
        pingServer(true);
      }
    }, 30000);
  };

  // Initial warmup ping 10 seconds after boot (if within active window)
  setTimeout(() => {
    if (isWithinActiveHours()) {
      console.log('[KeepAlive] Executing initial startup heartbeat...');
      pingServer();
    } else {
      console.log(`[KeepAlive] Server started outside active 12-hour window. Resting until ${startHour}:00 ${timeZone}.`);
    }
  }, 10000);

  // Periodic recurring heartbeat interval (14 minutes)
  keepAliveInterval = setInterval(pingServer, intervalMs);
}

export function stopKeepAlive() {
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
    keepAliveInterval = null;
  }
  if (retryTimeout) {
    clearTimeout(retryTimeout);
    retryTimeout = null;
  }
  console.log('[KeepAlive] Automated keep-alive service stopped.');
}
