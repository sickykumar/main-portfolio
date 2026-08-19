import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import Profile from '../models/Profile.js';

const syncProfile = async () => {
  try {
    await connectDB();
    console.log('Fetching existing profile...');
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }

    // Update stats
    profile.stats = [
      { icon: 'FolderGit2', value: '30+', label: 'Projects Built' },
      { icon: 'Code2', value: '500+', label: 'GitHub Contributions' },
      { icon: 'Target', value: '10+', label: 'Technologies' },
      { icon: 'Award', value: '8.40', label: 'CGPA' },
    ];

    // Update education timeline with all semesters
    profile.education = [
      {
        period: '2024 – Present (7th Sem)',
        degree: 'B.Tech in Computer Science & Engineering',
        school: 'MCKV Institute of Engineering, West Bengal',
        grade: 'CGPA: 8.40 / 10 (Till 6th Sem)',
        current: true,
        semesters: [
          { sem: 'Sem 3', sgpa: '8.10' },
          { sem: 'Sem 4', sgpa: '8.31' },
          { sem: 'Sem 5', sgpa: '8.69' },
          { sem: 'Sem 6', sgpa: '8.52' },
        ],
      },
      {
        period: '2020 – 2023',
        degree: 'Diploma in Computer Science & Technology',
        school: 'Technique Polytechnic Institute, West Bengal',
        grade: 'CGPA: 9.00 / 10 (83.4%) • 1st Class Distinction',
        current: false,
        semesters: [
          { sem: 'Sem 1', sgpa: '9.3' },
          { sem: 'Sem 2', sgpa: '9.8' },
          { sem: 'Sem 3', sgpa: '9.2' },
          { sem: 'Sem 4', sgpa: '8.6' },
          { sem: 'Sem 5', sgpa: '8.2' },
          { sem: 'Sem 6', sgpa: '8.7' },
        ],
      },
      {
        period: '2018 – 2019',
        degree: 'Secondary Education (Class 10)',
        school: 'Bandel Mahatma Gandhi Hindi Vidyalaya, West Bengal',
        grade: 'Percentage: 51.57%',
        current: false,
      },
    ];

    await profile.save();
    console.log('✅ Successfully updated live MongoDB Profile education and stats!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating profile:', error);
    process.exit(1);
  }
};

syncProfile();
