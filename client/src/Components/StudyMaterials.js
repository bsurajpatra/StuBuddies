import React, { useState } from 'react';

// Main StudyMaterials component
const StudyMaterials = () => {
  const [selectedField, setSelectedField] = useState(null);

  const fieldsData = {
    'Mechanical Engineering': ['Thermodynamics', 'Fluid Mechanics', 'Mechanics of Materials'],
    'Computer Science': ['DBMS', 'Operating Systems', 'Algorithms', 'Data Structures'],
    'Mathematics': ['Calculus', 'Linear Algebra', 'Statistics'],
    'Physics': ['Classical Mechanics', 'Electromagnetism', 'Quantum Physics'],
  };

  const handleFieldClick = (field) => {
    setSelectedField(field === selectedField ? null : field); // Toggle selection
  };

  return (
    <div style={{ 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    }}>
      {!selectedField ? (
        // Display field cards
        <div>
          <h2 style={{ color: '#333', textAlign: 'center' }}>Study Materials</h2>
          <h3 style={{ color: '#555', marginBottom: '20px', textAlign: 'center' }}>Select a Field:</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {Object.keys(fieldsData).map((field) => (
              <div 
                key={field} 
                style={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #ddd', 
                  borderRadius: '10px', 
                  padding: '30px', 
                  textAlign: 'center', 
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onClick={() => handleFieldClick(field)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <h4 style={{ color: '#1976d2', margin: '10px 0' }}>{field}</h4>
                <p style={{ margin: '10px 0' }}>Click to view subjects</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Display subject subcards for the selected field
        <div>
          <h3 style={{ color: '#555', textAlign: 'center', marginBottom: '20px' }}>{selectedField} Subjects:</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {fieldsData[selectedField].map((subject) => (
              <div key={subject} style={{ 
                backgroundColor: '#1976d2', 
                color: '#fff', 
                borderRadius: '10px', 
                padding: '30px', 
                textAlign: 'center' 
              }}>
                <h4 style={{ margin: '0' }}>{subject}</h4>
                <p style={{ margin: '5px 0 0' }}>Materials to be uploaded soon.</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setSelectedField(null)}
            style={{
              marginTop: '20px',
              padding: '10px 15px',
              fontSize: '14px',
              backgroundColor: '#1976d2',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              cursor: 'pointer',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Back to Fields
          </button>
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
