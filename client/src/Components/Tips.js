import React from 'react';

export default function Tips() {
  const tipsData = [
    {
      title: 'Ace Your Exams',
      content: 'Prepare a study schedule, take regular breaks, and focus on understanding concepts rather than rote memorization.',
      source: 'Study Skills Handbook',
      author: 'Prof. Jane Smith',
      postedBy: 'Community',
      datePosted: 'Sep 15, 2024',
      tags: ['Study', 'Exams'],
    },
    {
      title: 'Placement Preparation',
      content: 'Focus on honing your soft skills and technical skills. Participate in mock interviews and build a strong resume.',
      source: 'Career Services',
      author: 'John Doe',
      postedBy: 'User',
      datePosted: 'Sep 10, 2024',
      tags: ['Career', 'Preparation'],
    },
    {
      title: 'Project Work Tips',
      content: 'Start early, break down tasks into smaller milestones, and collaborate effectively with your teammates.',
      source: 'Teamwork Essentials',
      author: 'Alice Johnson',
      postedBy: 'User',
      datePosted: 'Sep 12, 2024',
      tags: ['Projects', 'Collaboration'],
    },
    {
      title: 'Time Management',
      content: 'Prioritize your tasks, avoid procrastination, and make use of tools like calendars and task managers to stay on track.',
      source: 'Productivity Guide',
      author: 'Mark Taylor',
      postedBy: 'Community',
      datePosted: 'Sep 8, 2024',
      tags: ['Time Management'],
    },
    {
      title: 'Effective Study Habits',
      content: 'Study in short bursts, teach others to better understand concepts, and stay away from distractions like phones.',
      source: 'Learning Strategies',
      author: 'Sarah Lee',
      postedBy: 'User',
      datePosted: 'Sep 5, 2024',
      tags: ['Study', 'Focus'],
    },
  ];

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      backgroundColor: 'transparent', // Make the background transparent
      borderRadius: '8px',
    }}>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tipsData.map((tip, index) => (
          <li key={index} style={{
            backgroundColor: '#ffffff', // Set card background to white
            marginBottom: '15px',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}>
            <h3 style={{ margin: '0 0 10px', color: '#1976d2' }}>{tip.title}</h3>
            <p style={{ margin: '0', color: '#333' }}>{tip.content}</p>
            <p style={{ margin: '5px 0', fontSize: '12px', color: '#757575' }}>
              <strong>Source:</strong> {tip.source} | 
              <strong> Author:</strong> {tip.author} | 
              <strong> Posted By:</strong> {tip.postedBy} | 
              <strong> Date:</strong> {tip.datePosted}
            </p>
            <p style={{ margin: '0', fontSize: '12px', color: '#757575' }}>
              <strong>Tags:</strong> {tip.tags.join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
