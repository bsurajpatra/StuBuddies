import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from '../Components/ResponsiveDrawer';
import Dashboard from '../Components/Dashboard';
import Chat from '../Components/Chat';
import NewsFeed from '../Components/NewsFeed';
import Discussion from '../Components/Discussion';
import Tips from '../Components/Tips';
import Polls from '../Components/Polls';
import Profile from '../Components/Profile';
import Settings from '../Components/Settings';
import Search from '../Components/Search'; 
import StudyMaterials from '../Components/StudyMaterials'; 
import Chatbot from '../Components/Chatbot'; // Import the Chatbot

function DrawerRouting() {
  return (
    <Routes>
      <Route path="/dashboard" element={<ResponsiveDrawer />}>
        <Route index element={<Dashboard />} />
        <Route path="chat" element={<Chat />} />
        <Route path="newsfeed" element={<NewsFeed />} />
        <Route path="discussion" element={<Discussion />} />
        <Route path="tips" element={<Tips />} />
        <Route path="polls" element={<Polls />} />
        <Route path="study-materials" element={<StudyMaterials />} /> 
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="search" element={<Search />} /> 
        <Route path="chatbot" element={<Chatbot />} /> 
      </Route>
    </Routes>
  );
}

export default DrawerRouting;
