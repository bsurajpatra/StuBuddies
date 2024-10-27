import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Avatar, Divider, List, IconButton, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

const discussions = [
  {
    title: 'Introduction to Quantum Physics',
    community: 'Physics Enthusiasts',
    author: 'Alice',
    date: 'Sep 21, 2024',
    content: 'Can someone explain the basics of quantum entanglement?',
    comments: 14,
  },
  {
    title: 'Machine Learning Study Group',
    community: 'AI Learners',
    author: 'Bob',
    date: 'Sep 20, 2024',
    content: 'We are meeting this Friday for a project discussion. Everyone is welcome!',
    comments: 8,
  },
  {
    title: 'JavaScript Async/Await',
    community: 'Web Developers',
    author: 'Charlie',
    date: 'Sep 19, 2024',
    content: 'How does async/await improve readability in JavaScript code?',
    comments: 22,
  },
];

// Styled components
const DiscussionContainer = styled(Box)({
  padding: '40px', // Increased padding for larger container
  backgroundColor: 'transparent', // Set to transparent
  maxWidth: '1200px', // Increased max width
  margin: 'auto',
  marginTop: '20px',
});

const DiscussionCard = styled(Card)({
  marginBottom: '30px', // Increased margin for space between cards
  padding: '20px', // Increased padding for larger card size
  background: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  width: '100%', // Set width to 100% to fill the container
});

const ActionButtons = styled(Box)({
  display: 'flex',
  marginTop: '10px',
  gap: '10px',
});

const CommentBox = styled(Box)({
  marginTop: '10px',
});

const CommentSection = styled(Box)({
  marginTop: '10px',
});

export default function Discussion() {
  const [liked, setLiked] = useState(Array(discussions.length).fill(false));
  const [commentText, setCommentText] = useState(Array(discussions.length).fill(''));
  const [commentVisibility, setCommentVisibility] = useState(Array(discussions.length).fill(false));
  const [comments, setComments] = useState(Array(discussions.length).fill([]));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const toggleCommentVisibility = (index) => {
    const newVisibility = [...commentVisibility];
    newVisibility[index] = !newVisibility[index];
    setCommentVisibility(newVisibility);
  };

  const handleCommentChange = (index, value) => {
    const newCommentText = [...commentText];
    newCommentText[index] = value;
    setCommentText(newCommentText);
  };

  const submitComment = (index) => {
    const newComments = [...comments];
    newComments[index] = [...newComments[index], commentText[index]];
    setComments(newComments);
    setCommentText(commentText.map((text, i) => (i === index ? '' : text)));
  };

  return (
    <DiscussionContainer>
      <List>
        {discussions.map((discussion, index) => (
          <DiscussionCard key={index}>
            <CardContent>
              <Box display="flex" alignItems="center" marginBottom="10px">
                <Avatar alt={discussion.author} src="/static/images/avatar/1.jpg" />
                <Typography variant="body1" style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {discussion.author}
                </Typography>
              </Box>
              <Typography variant="h5" style={{ color: '#2e3b55', fontSize: '1.5rem' }}>
                {discussion.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.9rem' }}>
                {discussion.community} - {discussion.date}
              </Typography>
              <Typography variant="body2" style={{ marginTop: '10px', fontSize: '1rem' }}>
                {discussion.content}
              </Typography>
              <Divider variant="middle" style={{ margin: '15px 0' }} />
              
              {/* Action buttons */}
              <ActionButtons>
                <IconButton
                  onClick={() => toggleLike(index)}
                  style={{
                    backgroundColor: liked[index] ? '#007bff' : '#007bff33',
                    color: '#ffffff',
                    borderRadius: '5px',
                  }}
                >
                  <ThumbUpIcon />
                </IconButton>
                <IconButton
                  onClick={() => toggleCommentVisibility(index)}
                  style={{ backgroundColor: '#007bff33', color: '#ffffff', borderRadius: '5px' }}
                >
                  <CommentIcon />
                </IconButton>
              </ActionButtons>

              {/* Comment section */}
              {commentVisibility[index] && (
                <CommentSection>
                  {/* Display existing comments */}
                  {comments[index].map((comment, commentIdx) => (
                    <Box key={commentIdx} marginTop="5px">
                      <Typography variant="body2" style={{ color: '#555', fontSize: '0.9rem' }}>
                        {comment}
                      </Typography>
                    </Box>
                  ))}

                  {/* Add a new comment */}
                  <CommentBox>
                    <TextField
                      label="Add a comment"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={commentText[index]}
                      onChange={(e) => handleCommentChange(index, e.target.value)}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff' }}
                      onClick={() => submitComment(index)}
                    >
                      Submit
                    </Button>
                  </CommentBox>
                </CommentSection>
              )}

              <Typography variant="caption" style={{ display: 'block', marginTop: '10px', color: '#757575' }}>
                {discussion.comments + comments[index].length} Comments
              </Typography>
            </CardContent>
          </DiscussionCard>
        ))}
      </List>
    </DiscussionContainer>
  );
}
