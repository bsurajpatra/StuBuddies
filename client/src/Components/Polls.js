import React, { useState } from 'react';

export default function Polls() {
  const [selectedPollIndex, setSelectedPollIndex] = useState(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const pollsData = [
    {
      question: 'Which study method works best for you?',
      options: ['Group Study', 'Self Study', 'Online Tutorials', 'Library Sessions'],
      votes: [40, 50, 20, 10],
      totalVotes: 120,
      author: 'John Doe',
      created: 'Sep 22, 2024',
    },
    {
      question: 'What is your preferred time to study?',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
      votes: [25, 15, 30, 15],
      totalVotes: 85,
      author: 'Jane Smith',
      created: 'Sep 21, 2024',
    },
    {
      question: 'Which online learning platform do you prefer?',
      options: ['Coursera', 'edX', 'Udemy', 'Khan Academy'],
      votes: [35, 30, 25, 12],
      totalVotes: 102,
      author: 'Alice Johnson',
      created: 'Sep 20, 2024',
    },
    {
      question: 'What helps you concentrate better?',
      options: ['Music', 'Silence', 'Background Noise', 'Coffee/Tea'],
      votes: [20, 25, 10, 10],
      totalVotes: 65,
      author: 'Bob Brown',
      created: 'Sep 19, 2024',
    },
    {
      question: 'What is the most challenging subject for you?',
      options: ['Mathematics', 'Physics', 'Literature', 'Economics'],
      votes: [30, 25, 20, 18],
      totalVotes: 93,
      author: 'Charlie Green',
      created: 'Sep 18, 2024',
    },
  ];

  const handleOptionSelect = (pollIndex, optionIndex) => {
    setSelectedPollIndex(pollIndex);
    setSelectedOptionIndex(optionIndex);
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      backgroundColor: 'transparent',
      borderRadius: '8px',
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        marginBottom: '30px',
      }}>
        Active Polls
      </h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {pollsData.map((poll, pollIndex) => (
          <li key={pollIndex} style={{
            backgroundColor: '#ffffff',
            marginBottom: '20px',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
          }}>
            <h3 style={{
              margin: '0 0 15px',
              color: '#333',
              fontWeight: 'bold',
            }}>
              {poll.question}
            </h3>
            <p style={{ color: '#666', fontStyle: 'italic', margin: '0 0 15px' }}>
              Created by: {poll.author} on {poll.created}
            </p>
            <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
              {poll.options.map((option, optionIndex) => {
                const percentage = (poll.votes[optionIndex] / poll.totalVotes) * 100;
                const isSelected = selectedPollIndex === pollIndex && selectedOptionIndex === optionIndex;

                return (
                  <li key={optionIndex} style={{
                    margin: '8px 0',
                    padding: '12px',
                    backgroundColor: isSelected ? '#0d3b66' : '#1976d2',
                    borderRadius: '6px',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease-in-out',
                    textAlign: 'center',
                  }}
                  onClick={() => handleOptionSelect(pollIndex, optionIndex)}
                  >
                    {option}
                    {isSelected && (
                      <div style={{ marginTop: '10px' }}>
                        <div style={{
                          height: '10px',
                          backgroundColor: '#1976d2',
                          width: `${percentage}%`,
                          borderRadius: '5px',
                          transition: 'width 0.3s ease',
                        }} />
                        <span style={{ color: '#fff', fontWeight: 'bold', marginLeft: '5px' }}>{`${percentage.toFixed(1)}%`}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <p style={{
              marginTop: '12px',
              fontSize: '0.95rem',
              color: '#666',
              textAlign: 'right',
            }}>
              Total Votes: {poll.totalVotes}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
