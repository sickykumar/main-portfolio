// Static data for the /education page
export const educationData = {
  hero: {
    title: "Academic Journey",
    subtitle: "Verified Academic Records",
    description: "Explore the verified academic credentials, transcripts, and semester-wise progress reports. All sensitive data is privacy-shielded for validation purposes."
  },
  levels: [
    {
      id: "btech",
      title: "Bachelor of Technology",
      institution: "MCKV Institute of Engineering, West Bengal",
      board: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
      subtitle: "B.Tech in Computer Science & Engineering (Lateral Entry)",
      summary: [
        { label: "Current CGPA", value: "8.40/10" },
        { label: "Duration", value: "2024 – Present" },
        { label: "Current Semester", value: "7th Sem" },
        { label: "Entry Mode", value: "Lateral Entry" },
        { label: "Status", value: "Pursuing", isBadge: true }
      ],
      documents: [
        {
          id: "btech_sem_3",
          title: "Semester 3 Marksheet",
          category: "Semester Transcript",
          year: "2024–2025",
          status: "Available",
          docDetails: {
            title: "B.Tech Semester 3 Marksheet (CSE)",
            institution: "MCKV Institute of Engineering",
            authority: "MAKAUT (Autonomous)",
            roll: "11600224XXX",
            registration: "24116012XXXX",
            year: "2024–2025",
            records: [
              { subject: "Communication Engineering (ES-EC301)", marks: "E (Grade 9)", maxMarks: "Credit: 3.0" },
              { subject: "Digital Electronics (ES-EC302)", marks: "A (Grade 8)", maxMarks: "Credit: 3.0" },
              { subject: "Mathematics-III (BS-M301)", marks: "C (Grade 6)", maxMarks: "Credit: 3.0" },
              { subject: "Data Structures & Algorithms (PC-CS301)", marks: "B (Grade 7)", maxMarks: "Credit: 3.0" },
              { subject: "Biology for Engineers (BS-BIO301)", marks: "A (Grade 8)", maxMarks: "Credit: 2.0" },
              { subject: "Industrial Management (HM-HU301)", marks: "E (Grade 9)", maxMarks: "Credit: 2.0" },
              { subject: "Digital Electronics Lab (ES-EC392)", marks: "E (Grade 9)", maxMarks: "Credit: 1.5" },
              { subject: "DSA Lab (PC-CS391)", marks: "E (Grade 9)", maxMarks: "Credit: 1.5" },
              { subject: "IT Workshop (Python) Lab (PC-CS392)", marks: "O (Grade 10)", maxMarks: "Credit: 1.5" },
              { subject: "Environmental Sciences (MC371 - Audit)", marks: "E (Grade 9)", maxMarks: "Credit: 0.0" }
            ],
            summaryText: "SGPA: 8.10 / 10 | Total Credits: 20.5 | Result: Passed"
          }
        },
        {
          id: "btech_sem_4",
          title: "Semester 4 Marksheet",
          category: "Semester Transcript",
          year: "2024–2025",
          status: "Available",
          docDetails: {
            title: "B.Tech Semester 4 Marksheet (CSE)",
            institution: "MCKV Institute of Engineering",
            authority: "MAKAUT (Autonomous)",
            roll: "11600224XXX",
            registration: "24116012XXXX",
            year: "2024–2025",
            records: [
              { subject: "Operating Systems (PC-CS402)", marks: "O (Grade 10)", maxMarks: "Credit: 3.0" },
              { subject: "Computer Organization (PC-CS401)", marks: "E (Grade 9)", maxMarks: "Credit: 3.0" },
              { subject: "Design & Analysis of Algorithm (PC-CS403)", marks: "B (Grade 7)", maxMarks: "Credit: 3.0" },
              { subject: "Discrete Mathematics (PC-CS404)", marks: "B (Grade 7)", maxMarks: "Credit: 3.0" },
              { subject: "Numerical Methods (BS-M404)", marks: "C (Grade 6)", maxMarks: "Credit: 2.0" },
              { subject: "Operating Systems Lab (PC-CS492)", marks: "O (Grade 10)", maxMarks: "Credit: 1.5" },
              { subject: "Computer Organization Lab (PC-CS491)", marks: "E (Grade 9)", maxMarks: "Credit: 1.5" },
              { subject: "DAA Lab (PC-CS493)", marks: "E (Grade 9)", maxMarks: "Credit: 1.5" },
              { subject: "Numerical Methods Lab (BS-M494)", marks: "E (Grade 9)", maxMarks: "Credit: 1.0" },
              { subject: "Constitution of India (MC472 - Audit)", marks: "E (Grade 9)", maxMarks: "Credit: 0.0" }
            ],
            summaryText: "SGPA: 8.31 / 10 | YGPA: 8.20 / 10 | Result: Passed"
          }
        },
        {
          id: "btech_sem_5",
          title: "Semester 5 Marksheet",
          category: "Semester Transcript",
          year: "2025–2026",
          status: "Available",
          docDetails: {
            title: "B.Tech Semester 5 Marksheet (CSE)",
            institution: "MCKV Institute of Engineering",
            authority: "MAKAUT (Autonomous)",
            roll: "11600224XXX",
            registration: "24116012XXXX",
            year: "2025–2026",
            records: [
              { subject: "Computer Architecture (PC-CS501)", marks: "O (Grade 10)", maxMarks: "Credit: 3.0" },
              { subject: "Object Oriented Programming (PC-CS502)", marks: "E (Grade 9)", maxMarks: "Credit: 3.0" },
              { subject: "Formal Language & Automata (PC-CS503)", marks: "E (Grade 9)", maxMarks: "Credit: 3.0" },
              { subject: "Economics for Engineers (HM-HU501)", marks: "A (Grade 8)", maxMarks: "Credit: 3.0" },
              { subject: "Machine Learning (PE-CS501A)", marks: "A (Grade 8)", maxMarks: "Credit: 3.0" },
              { subject: "Microprocessor & Microcontroller (PC-CS504)", marks: "B (Grade 7)", maxMarks: "Credit: 2.0" },
              { subject: "OOP Lab (Java) (PC-CS592)", marks: "O (Grade 10)", maxMarks: "Credit: 1.5" },
              { subject: "Advanced IT Workshop (Python) (PC-CS591)", marks: "E (Grade 9)", maxMarks: "Credit: 1.5" },
              { subject: "Soft Skill Development Lab (HM-HU591)", marks: "A (Grade 8)", maxMarks: "Credit: 1.0" },
              { subject: "Aptitude Skill Dev-I (MC571 - Audit)", marks: "E (Grade 9)", maxMarks: "Credit: 0.0" }
            ],
            summaryText: "SGPA: 8.69 / 10 | Total Credits: 21.0 | Result: Passed"
          }
        },
        {
          id: "btech_sem_6",
          title: "Semester 6 Marksheet",
          category: "Semester Transcript",
          year: "2025–2026",
          status: "Available",
          docDetails: {
            title: "B.Tech Semester 6 Marksheet (CSE)",
            institution: "MCKV Institute of Engineering",
            authority: "MAKAUT (Autonomous)",
            roll: "11600224XXX",
            registration: "24116012XXXX",
            year: "2025–2026",
            records: [
              { subject: "Project-I (PW-CS681)", marks: "O (Grade 10)", maxMarks: "Credit: 3.0" },
              { subject: "Computer Networks (PC-CS603)", marks: "E (Grade 9)", maxMarks: "Credit: 3.0" },
              { subject: "Data Mining (PE-CS601A)", marks: "E (Grade 9)", maxMarks: "Credit: 3.0" },
              { subject: "Compiler Design (PC-CS601)", marks: "A (Grade 8)", maxMarks: "Credit: 3.0" },
              { subject: "Database Management System (PC-CS602)", marks: "A (Grade 8)", maxMarks: "Credit: 3.0" },
              { subject: "Software Engineering (PC-CS604)", marks: "A (Grade 8)", maxMarks: "Credit: 3.0" },
              { subject: "Data Analysis & Visualization (PE-CS602C)", marks: "B (Grade 7)", maxMarks: "Credit: 3.0" },
              { subject: "DBMS Lab (PC-CS692)", marks: "E (Grade 9)", maxMarks: "Credit: 1.5" },
              { subject: "Computer Networks Lab (PC-CS693)", marks: "E (Grade 9)", maxMarks: "Credit: 1.5" },
              { subject: "Software Dev & DevOps Lab (PC-CS694)", marks: "E (Grade 9)", maxMarks: "Credit: 1.0" },
              { subject: "Aptitude Skill Dev-II (MC671 - Audit)", marks: "D (Grade 5)", maxMarks: "Credit: 0.0" }
            ],
            summaryText: "SGPA: 8.52 / 10 | YGPA: 8.60 / 10 | Result: Passed"
          }
        },
        {
          id: "btech_sem_7",
          title: "Semester 7 Marksheet",
          category: "Semester Transcript",
          year: "2026",
          status: "Coming Soon"
        },
        {
          id: "btech_sem_8",
          title: "Semester 8 Marksheet",
          category: "Semester Transcript",
          year: "2027",
          status: "Coming Soon"
        }
      ]
    },
    {
      id: "diploma",
      title: "Diploma in Computer Science & Technology",
      institution: "Technique Polytechnic Institute, West Bengal",
      board: "West Bengal State Council of Technical and Vocational Education and Skill Development (WBSCTVESD)",
      summary: [
        { label: "Final CGPA", value: "9.00/10" },
        { label: "Duration", value: "2020 – 2023" },
        { label: "Total Semesters", value: "6 Semesters" },
        { label: "Class", value: "1st Class Distinction", isBadge: true }
      ],
      documents: [
        {
          id: "diploma_sem_1",
          title: "Semester 1 Marksheet",
          category: "Semester Transcript",
          year: "2021",
          status: "Available",
          docDetails: {
            title: "Diploma Semester 1 Marksheet",
            institution: "Technique Polytechnic Institute",
            authority: "WBSCTVESD",
            roll: "D-CST-10020XXX",
            registration: "D202120XXX",
            year: "2021",
            records: [
              { subject: "Mathematics-I", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Applied Chemistry", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Applied Physics-I", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "Communication Skills in English", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Engineering Graphics Lab", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "Applied Chemistry Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Applied Physics-I Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Engineering Workshop Practice", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "Communication Skills Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Sports and Yoga", marks: "AA (Outstanding)", maxMarks: "Marks: 100" }
            ],
            summaryText: "GPA: 9.30 / 10 | Percentage: 87.6% | Result: Passed"
          }
        },
        {
          id: "diploma_sem_2",
          title: "Semester 2 Marksheet",
          category: "Semester Transcript",
          year: "2021",
          status: "Available",
          docDetails: {
            title: "Diploma Semester 2 Marksheet",
            institution: "Technique Polytechnic Institute",
            authority: "WBSCTVESD",
            roll: "D-CST-10020XXX",
            registration: "D202120XXX",
            year: "2021",
            records: [
              { subject: "Engineering Mathematics-II", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Engineering Mechanics", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Applied Physics-II", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "Introduction to IT Systems", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Fundamentals of Electrical & Electronics", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "IT Systems Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Applied Physics-II Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Electrical & Electronics Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Engineering Mechanics Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Environmental Science", marks: "AB (Excellent)", maxMarks: "Marks: 100" }
            ],
            summaryText: "GPA: 9.00 / 10 | Result: Passed"
          }
        },
        {
          id: "diploma_sem_3",
          title: "Semester 3 Marksheet",
          category: "Semester Transcript",
          year: "2022",
          status: "Available",
          docDetails: {
            title: "Diploma Semester 3 Marksheet",
            institution: "Technique Polytechnic Institute",
            authority: "WBSCTVESD",
            roll: "D-CST-10020XXX",
            registration: "D202120XXX",
            year: "2022",
            records: [
              { subject: "Computer Programming (C)", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Scripting Languages (Python)", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Data Structures & Algorithms", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "Computer System Architecture", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Programming in C Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Python Scripting Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Algorithms Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" }
            ],
            summaryText: "GPA: 8.60 / 10 | Percentage: 81.4% | Result: Passed"
          }
        },
        {
          id: "diploma_sem_4",
          title: "Semester 4 Marksheet",
          category: "Semester Transcript",
          year: "2022",
          status: "Available",
          docDetails: {
            title: "Diploma Semester 4 Marksheet",
            institution: "Technique Polytechnic Institute",
            authority: "WBSCTVESD",
            roll: "D-CST-10020XXX",
            registration: "D202120XXX",
            year: "2022",
            records: [
              { subject: "Operating Systems", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Introduction to DBMS", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Computer Networks", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Software Engineering (SSAD)", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "OOP using Java", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Minor Project", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Operating Systems Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "DBMS Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Computer Networks Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Java Programming Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" }
            ],
            summaryText: "GPA: 8.60 / 10 | Percentage: 82.0% | Result: Passed"
          }
        },
        {
          id: "diploma_sem_5",
          title: "Semester 5 Marksheet",
          category: "Semester Transcript",
          year: "2022",
          status: "Available",
          docDetails: {
            title: "Diploma Semester 5 Marksheet",
            institution: "Technique Polytechnic Institute",
            authority: "WBSCTVESD",
            roll: "D-CST-10020XXX",
            registration: "D202120XXX",
            year: "2022",
            records: [
              { subject: "Java & Advanced Web Tech", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Internet of Things (IoT)", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Microprocessor & Microcontroller", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Advanced Java Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "IoT Applications Lab", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Industrial Training & Seminar", marks: "AA (Outstanding)", maxMarks: "Marks: 100" }
            ],
            summaryText: "GPA: 9.80 / 10 | Percentage: 91.5% | Result: Passed"
          }
        },
        {
          id: "diploma_sem_6",
          title: "Semester 6 Marksheet",
          category: "Semester Transcript",
          year: "2023",
          status: "Available",
          docDetails: {
            title: "Diploma Semester 6 Marksheet",
            institution: "Technique Polytechnic Institute",
            authority: "WBSCTVESD",
            roll: "D-CST-10020XXX",
            registration: "D202120XXX",
            year: "2023",
            records: [
              { subject: "Data Warehousing & Data Mining", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Entrepreneurship & Start-ups", marks: "BB (Very Good)", maxMarks: "Marks: 100" },
              { subject: "Machine Learning", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "Engineering Economics & Project Mgmt", marks: "AB (Excellent)", maxMarks: "Marks: 100" },
              { subject: "Major Project & Implementation", marks: "AA (Outstanding)", maxMarks: "Marks: 100" },
              { subject: "Seminar & Grand Viva", marks: "AA (Outstanding)", maxMarks: "Marks: 100" }
            ],
            summaryText: "GPA: 9.00 / 10 | Overall 1st Class Distinction | Result: Passed"
          }
        },
        {
          id: "diploma_certificate",
          title: "Final Diploma Certificate",
          category: "Certificate",
          year: "2023",
          status: "Available",
          docDetails: {
            title: "Diploma in Computer Science & Technology",
            institution: "Technique Polytechnic Institute",
            authority: "WBSCTVESD",
            roll: "D-CST-10020XXX",
            registration: "D202120XXX",
            year: "2023",
            isCertificate: true,
            awardText: "This is to certify that SICKY KUMAR, having successfully completed the prescribed course of studies and passed the final examinations, is hereby awarded the Diploma in Computer Science & Technology with 1st Class Distinction (Serial No: 18802/22-23).",
            summaryText: "Final Cumulative CGPA: 9.00 / 10 | 1st Class Distinction"
          }
        }
      ]
    },
    {
      id: "secondary",
      title: "Secondary Education",
      institution: "Bandel Mahatma Gandhi Hindi Vidyalaya, West Bengal",
      board: "West Bengal Board of Secondary Education (WBBSE)",
      summary: [
        { label: "Percentage", value: "51.57%" },
        { label: "Passing Year", value: "2019" },
        { label: "Status", value: "Completed", isBadge: true }
      ],
      documents: [
        {
          id: "class_10_marksheet",
          title: "Class 10 Marksheet",
          category: "Marksheet",
          year: "2019",
          status: "Available",
          docDetails: {
            title: "Secondary School Examination Transcripts",
            institution: "Bandel Mahatma Gandhi Hindi Vidyalaya",
            authority: "West Bengal Board of Secondary Education",
            roll: "710245N-XXXX",
            registration: "5124098XXX",
            year: "2019",
            records: [
              { subject: "First Language (Hindi)", marks: 52, maxMarks: 100 },
              { subject: "Second Language (English)", marks: 45, maxMarks: 100 },
              { subject: "Mathematics", marks: 58, maxMarks: 100 },
              { subject: "Physical Science", marks: 49, maxMarks: 100 },
              { subject: "Life Science", marks: 54, maxMarks: 100 },
              { subject: "History", marks: 50, maxMarks: 100 },
              { subject: "Geography", marks: 53, maxMarks: 100 }
            ],
            summaryText: "Grand Total: 361/700 | Result: Passed"
          }
        }
      ]
    }
  ]
};
