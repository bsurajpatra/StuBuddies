import React, { useState } from 'react';
import profilePicture from './Profile.webp';

function Profile() {
  const [profileData] = useState({
    username: 'Police_Cat 🐾🚓',
    bio: 'Solving crimes, catching bad guys, and chasing laser pointers on the side. Known for keeping the streets safe and napping in sunbeams!',
    email: 'whiskers@pawlice.com',
    phone: '+91-9999999999 (Paw-dial only)',
    university: 'KL University',
    course: 'B.Tech in Computer Science Engineering',
    year: '2nd Year',
    achievements: ['🥇 Best Mouse Catcher 2023', '🏆 Top Paw Enforcer Award', '👮‍♀️ Officer of the Year (for 7 consecutive lives)'],
    skills: ['Expert at sneaking', 'Purring under pressure', 'Solving cat burglaries with precision'],
    interests: 'Solving crimes in style, Chasing laser dots, Scratching posts & justice.',
    projects: 'https://github.com/pawlice-chief-debugger 🐾',
    followers: 1000000,
    following: 2,
    badges: ['Catnip Medal of Honor', 'Golden Paw Print for bravery'],
  });

  const styles = {
    profileContainer: {
      width: '100%',
      maxWidth: '1200px',
      margin: 'auto',
      padding: '40px',
      border: '1px solid #eaeaea',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    profileHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profilePicture: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginRight: '30px',
    },
    profileInfo: {
      flexGrow: 1,
    },
    username: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: 0,
      color: '#000', 
    },
    bio: {
      fontSize: '16px',
      color: '#000', 
    },
    contactInfo: {
      fontSize: '16px',
      color: '#000', 
    },
    profileDetails: {
      borderTop: '1px solid #eaeaea',
      paddingTop: '20px',
    },
    sectionTitle: {
      marginTop: '15px',
      fontSize: '22px',
      color: '#000', 
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '40px',
      color: '#000', 
    },
    separator: {
      borderTop: '1px solid #eaeaea',
      margin: '20px 0',
    },
  };

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <img src={profilePicture} alt="Profile" style={styles.profilePicture} />
        <div style={styles.profileInfo}>
          <h2 style={styles.username}>{profileData.username}</h2>
          <p style={styles.bio}>{profileData.bio}</p>
          <div style={styles.contactInfo}>
            <p>Email: {profileData.email}</p>
            <p>Phone: {profileData.phone}</p>
          </div>
        </div>
      </div>

      <div style={styles.profileDetails}>
        <h3 style={styles.sectionTitle}>Followers: {profileData.followers} | Following: {profileData.following}</h3>

        <h3 style={styles.sectionTitle}>Academic Achievements</h3>
        <ul style={styles.list}>
          {profileData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>

        <div style={styles.separator}></div>

        <h3 style={styles.sectionTitle}>Academic Details</h3>
        <ul style={styles.list}>
          <li>University: {profileData.university}</li>
          <li>Course: {profileData.course}</li>
          <li>Year of Study: {profileData.year}</li>
        </ul>

        <div style={styles.separator}></div>

        <h3 style={styles.sectionTitle}>Skills & Expertise</h3>
        <ul style={styles.list}>
          {profileData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <div style={styles.separator}></div>

        <h3 style={styles.sectionTitle}>Interests & Goals</h3>
        <p style={{ color: '#000' }}>{profileData.interests}</p>

        <div style={styles.separator}></div>

        <h3 style={styles.sectionTitle}>Portfolio/Projects</h3>
        <a href={profileData.projects} target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
          {profileData.projects}
        </a>
      </div>
    </div>
  );
}

export default Profile;
