import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa'; // You'll need to install react-icons if you haven't: npm install react-icons

export default function Settings() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'Account Settings',
    'Notification Settings',
    'Community & Privacy',
    'Appearance & Themes',
    'Content Preferences',
    'Language & Regional Settings',
    'Data & Privacy',
    'Help & Support',
    'App Integrations',
    'Discussion Settings',
    'Newsfeed Settings',
    'Poll Settings',
    'Tips Settings',
  ];

  const subCategorySettings = {
    'Account Settings': [
      'Edit Profile',
      'Change Email/Password',
      'Link Social Media Accounts',
      'Privacy Settings',
      'Deactivate/Delete Account',
    ],
    'Notification Settings': [
      'Push Notifications',
      'Email Notifications',
      'Mobile Notifications',
    ],
    'Community & Privacy': [
      'Blocked Users',
      'Report Abuse',
      'Group Privacy',
      'Activity Visibility',
    ],
    'Appearance & Themes': [
      'Dark Mode/Light Mode',
      'Custom Themes',
      'Font Size/Style',
    ],
    'Content Preferences': [
      'Feed Customization',
      'Muted Keywords/Topics',
    ],
    'Language & Regional Settings': [
      'Language Selection',
      'Time Zone',
    ],
    'Data & Privacy': [
      'Download Data',
      'Data Sharing Preferences',
      'Two-Factor Authentication',
    ],
    'Help & Support': [
      'FAQs',
      'Contact Support',
      'Community Guidelines',
    ],
    'App Integrations': [
      'Connected Apps',
      'API Access',
    ],
    'Discussion Settings': [
      'Visibility Settings',
      'Moderation Settings',
      'Notification Settings',
      'Pinned Discussions',
      'Mute Discussions',
      'Anonymous Posting',
    ],
    'Newsfeed Settings': [
      'Content Filtering',
      'Followed Topics',
      'Post Visibility',
      'Post Frequency',
      'Muted Users/Groups',
    ],
    'Poll Settings': [
      'Poll Privacy',
      'Vote Anonymity',
      'Poll Duration',
      'Poll Results Visibility',
      'Notification Settings',
    ],
    'Tips Settings': [
      'Content Categories',
      'Submit Tips',
      'Bookmark Tips',
      'Tip Notifications',
      'Tip Sharing',
    ],
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      {/* Header Bar */}
      <div
        style={{
          backgroundColor: '#007bff',
          padding: '10px',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <FaCog size={28} />
        <span>Settings</span>
      </div>

      {/* Settings Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '20px auto',
          padding: '0 20px',
        }}
      >
        {!selectedCategory ? (
          <div>
            <h3 style={{ color: '#555', marginBottom: '20px', textAlign: 'center' }}>
              Select a Settings Category:
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  style={{
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: '#fff',
                    fontSize: '16px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onClick={() => setSelectedCategory(category)}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ color: '#555', marginBottom: '20px', textAlign: 'center' }}>
              {selectedCategory} Settings:
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
              }}
            >
              {subCategorySettings[selectedCategory].map((setting) => (
                <button
                  key={setting}
                  style={{
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '15px',
                    textAlign: 'center',
                    color: '#fff',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {setting}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                marginTop: '20px',
                padding: '10px 15px',
                fontSize: '14px',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '5px',
                color: '#fff',
                cursor: 'pointer',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
