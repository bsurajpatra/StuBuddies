import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" 
         style={{ height: '100%', width: '100%', backgroundColor: '#fdf5e2' }}>
      <div className="text-center p-4 rounded bg-white bg-opacity-90 shadow" 
           style={{ width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}>
        <Typography variant="h2" gutterBottom 
          style={{ fontWeight: 'bold', color: '#0d3b66', fontFamily: 'Arial, sans-serif' }}>
          Welcome to StuBuddies
        </Typography>

        <Typography variant="h5" 
          style={{ fontSize: '1.5rem', margin: '10px 0 30px 0', color: '#0d3b66', fontFamily: 'Georgia, serif' }}>
          Connect - Collaborate - Succeed
        </Typography>

        {userEmail && (
          <Typography variant="h6" gutterBottom 
            style={{ fontWeight: 'bold', color: '#0d3b66', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>
            Logged in as: {userEmail}
          </Typography>
        )}

        <ul className="list-unstyled" 
          style={{ textAlign: 'left', fontSize: '1.2rem', lineHeight: '1.5', color: '#0d3b66' }}>
          <li>🌟 Bring the campus community together.</li>
          <li>💬 Catch up with friends through chat.</li>
          <li>📰 Stay updated with the latest news.</li>
          <li>💡 Engage in meaningful discussions.</li>
          <li>📚 Access valuable resources.</li>
          <li>🔍 Explore features to enhance your university life.</li>
        </ul>
      </div>
    </div>
  );
}