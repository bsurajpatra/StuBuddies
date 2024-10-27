import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import FeedIcon from '@mui/icons-material/Feed';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PollIcon from '@mui/icons-material/Poll';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChatIcon from '@mui/icons-material/Chat';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import SmartToyIcon from '@mui/icons-material/SmartToy'; 

const pages = [
  { label: 'News Feed', path: 'newsfeed', icon: <FeedIcon /> },
  { label: 'Search', path: 'search', icon: <SearchIcon /> },
  { label: 'Chat', path: 'chat', icon: <ChatIcon /> },
  { label: 'Discussion', path: 'discussion', icon: <QuestionAnswerIcon /> },
  { label: 'Tips', path: 'tips', icon: <EmojiObjectsIcon /> },
  { label: 'Polls', path: 'polls', icon: <PollIcon /> },
  { label: 'Study Materials', path: 'study-materials', icon: <LibraryBooksIcon /> }, // New button for Study Materials
  { label: 'Chatbot', path: 'chatbot', icon: <SmartToyIcon /> }, // Updated icon for Chatbot
];

const settings = [
  { label: 'Profile', path: 'profile', icon: <PersonIcon /> },
  { label: 'Settings', path: 'settings', icon: <SettingsIcon /> },
  { label: 'Logout', path: '/', icon: <ExitToAppIcon /> },
];

function ResponsiveDrawer() {
  const [activePage, setActivePage] = useState('home');
  const navigate = useNavigate();

  const handlePageChange = (path) => {
    if (path === '/') {
      const confirmed = window.confirm('Are you sure you want to logout?');
      if (confirmed) {
        setActivePage(path);
        navigate('/');
      }
    } else {
      setActivePage(path);
      navigate(`/dashboard/${path}`);
    }
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '240px 1fr', height: '100vh', bgcolor: '#fdf5e2' }}>
      <Drawer
        variant="permanent"
        sx={{
          gridRow: '1 / -1',
          gridColumn: '1 / 2',
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#318CE7', 
            color: '#fff',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
          <BookIcon sx={{ mr: 1, color: '#fff' }} />
          <Typography
            variant="h6"
            sx={{ cursor: 'pointer', color: '#fff' }}
            onClick={() => navigate('/dashboard')}
          >
            StuBuddies
          </Typography>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem
              button
              key={page.path}
              onClick={() => handlePageChange(page.path)}
              sx={{
                '&:hover': { backgroundColor: '#004494', transform: 'scale(1.05)' }, 
                transition: 'transform 0.2s ease-in-out',
                height: '56px',
                padding: '10px 16px',
              }}
            >
              {page.icon}
              <ListItemText
                primary={page.label}
                sx={{ color: '#e6f7ff', ml: 2, fontSize: '1.5rem' }} 
              />
            </ListItem>
          ))}
        </List>
        <List>
          {settings.map((setting) => (
            <ListItem
              button
              key={setting.label}
              onClick={() => handlePageChange(setting.path)}
              sx={{
                '&:hover': { backgroundColor: '#004494', transform: 'scale(1.05)' },
                transition: 'transform 0.2s ease-in-out',
                height: '56px',
                padding: '10px 16px',
              }}
            >
              {setting.icon}
              <ListItemText
                primary={setting.label}
                sx={{ color: '#e6f7ff', ml: 2, fontSize: '1.5rem' }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          gridRow: '1 / -1',
          gridColumn: '2 / 3',
          bgcolor: '#fdf5e2',  
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          overflowX: 'hidden',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
