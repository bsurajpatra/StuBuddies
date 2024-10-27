import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Chat() {
  const conversations = [
    { id: 1, name: 'John Doe', message: 'Hey there!', profilePic: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', message: 'What’s up?', profilePic: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Alex Brown', message: 'See you tomorrow!', profilePic: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Alice Johnson', message: 'Let’s catch up!', profilePic: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Michael Lee', message: 'Happy birthday!', profilePic: 'https://via.placeholder.com/50' },
  ];

  return (
    <Container fluid style={{ backgroundColor: '#fdf5e2', height: '100vh' }}>
      <Row className="h-100">
        <Col md={3} className="d-flex flex-column" style={{ borderRight: '1px solid #ddd' }}>
          <h4 style={{ padding: '1rem', margin: 0, color: '#333' }}>Chats</h4>
          <ListGroup variant="flush" className="flex-grow-1 overflow-auto">
            {conversations.map(chat => (
              <ListGroup.Item
                key={chat.id}
                action
                style={{
                  backgroundColor: '#fff',
                  border: '2px solid #318CE7', 
                  color: '#333',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  padding: '15px',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px', 
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
              >
                <img
                  src={chat.profilePic}
                  alt="profile"
                  className="rounded-circle mr-3"
                  width="50"
                  height="50"
                />
                <div style={{ flex: 1, marginLeft: '10px' }}>
                  <strong style={{ color: '#007bff' }}>{chat.name}</strong>
                  <p style={{ marginBottom: 0, fontSize: '14px', color: '#555' }}>{chat.message}</p>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col 
  md={9} 
  className="d-flex align-items-center justify-content-center" 
  style={{
    backgroundColor: '#e5e5f7',
    opacity: 0.7,
    backgroundImage: 'linear-gradient(135deg, #fdf2d9 25%, transparent 25%), linear-gradient(225deg, #fdf2d9 25%, transparent 25%), linear-gradient(45deg, #fdf2d9 25%, transparent 25%), linear-gradient(315deg, #fdf2d9 25%, #e5e5f7 25%)',
    backgroundPosition: '4px 0, 4px 0, 0 0, 0 0',
    backgroundSize: '4px 4px',
    backgroundRepeat: 'repeat'
  }}
>
  <h5 style={{ textAlign: 'center', color: '#666' }}>Select a chat to start messaging</h5>
</Col>


      </Row>
    </Container>
  );
}
