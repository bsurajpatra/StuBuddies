// src/Components/NewsFeed.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Avatar, Divider, List, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Bookmark';

const newsPosts = [
  {
    id: 1,
    title: 'New Course Available: AI and Machine Learning',
    content: 'A new AI and Machine Learning course has been introduced for students starting this semester. Sign up now to explore the cutting-edge technology...',
    date: 'September 20, 2024',
    author: 'Prof. John Doe',
  },
  {
    id: 2,
    title: 'Campus Library Extends Working Hours',
    content: 'To facilitate students during the exam period, the campus library will remain open 24/7 until the end of the semester...',
    date: 'September 19, 2024',
    author: 'University Admin',
  },
  {
    id: 3,
    title: 'Hackathon 2024: Registrations Now Open',
    content: 'Join the annual Hackathon event and compete with the brightest minds in innovative technology solutions...',
    date: 'September 18, 2024',
    author: 'Tech Club',
  },
];

// Styling for the news feed
const NewsFeedContainer = styled(Box)({
  padding: '20px',
  background: 'transparent', // Container is invisible
  maxWidth: '800px',
  margin: 'auto',
  marginTop: '20px',
});

const NewsCard = styled(Card)({
  marginBottom: '20px',
  background: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
});

const UserDetails = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
});

const ActionButtons = styled(Box)({
  display: 'flex',
  marginTop: '10px',
});

export default function NewsFeed() {
  // State to manage button click statuses
  const [liked, setLiked] = useState(Array(newsPosts.length).fill(false));
  const [commented, setCommented] = useState(Array(newsPosts.length).fill(false));
  const [shared, setShared] = useState(Array(newsPosts.length).fill(false));
  const [saved, setSaved] = useState(Array(newsPosts.length).fill(false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const toggleComment = (index) => {
    const newCommented = [...commented];
    newCommented[index] = !newCommented[index];
    setCommented(newCommented);
  };

  const toggleShare = (index) => {
    const newShared = [...shared];
    newShared[index] = !newShared[index];
    setShared(newShared);
  };

  const toggleSave = (index) => {
    const newSaved = [...saved];
    newSaved[index] = !newSaved[index];
    setSaved(newSaved);
  };

  return (
    <NewsFeedContainer>
      <List>
        {newsPosts.map((post, index) => (
          <NewsCard key={post.id}>
            <CardContent>
              <UserDetails>
                <Avatar alt="User Photo" src="/static/images/avatar/1.jpg" />
                <Typography variant="body1" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                  {post.author}
                </Typography>
              </UserDetails>
              <Typography variant="h6" style={{ color: '#2e3b55' }}>
                {post.title}
              </Typography>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.content}
              </Typography>
              <Divider variant="middle" />
              {/* Action buttons with icons */}
              <ActionButtons>
                <IconButton
                  onClick={() => toggleLike(index)}
                  style={{
                    background: liked[index] ? '#007bff' : '#007bff33', // Blue when clicked
                    color: liked[index] ? '#ffffff' : '#ffffff', // White icon
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                >
                  <ThumbUpIcon />
                </IconButton>
                <IconButton
                  onClick={() => toggleComment(index)}
                  style={{
                    background: commented[index] ? '#007bff' : '#007bff33',
                    color: commented[index] ? '#ffffff' : '#ffffff',
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                >
                  <CommentIcon />
                </IconButton>
                <IconButton
                  onClick={() => toggleShare(index)}
                  style={{
                    background: shared[index] ? '#007bff' : '#007bff33',
                    color: shared[index] ? '#ffffff' : '#ffffff',
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                >
                  <ShareIcon />
                </IconButton>
                <IconButton
                  onClick={() => toggleSave(index)}
                  style={{
                    background: saved[index] ? '#007bff' : '#007bff33',
                    color: saved[index] ? '#ffffff' : '#ffffff',
                    borderRadius: '5px',
                  }}
                >
                  <SaveIcon />
                </IconButton>
              </ActionButtons>
              <Typography variant="caption" style={{ display: 'block', marginTop: '5px', color: '#757575' }}>
                — {post.date}
              </Typography>
            </CardContent>
          </NewsCard>
        ))}
      </List>
    </NewsFeedContainer>
  );
}
