import React, { useState, useEffect } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import HistoryIcon from '@mui/icons-material/History';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh'; // Importing Refresh icon
import { Box, IconButton, InputBase, Typography } from '@mui/material';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        if (messages.length > 0) {
            setShowWelcome(false);
        }
    }, [messages]);

    const handleSend = () => {
        if (input) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            getChatbotResponse(input);
            setInput('');
        }
    };

    const getChatbotResponse = (userMessage) => {
        const response = "This is a response from the AI Chatbot"; // Placeholder response
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: response, sender: 'bot' },
        ]);
    };

    // Function to clear the chat
    const clearChat = () => {
        setMessages([]);
        setShowWelcome(true); // Show the welcome message again
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    width: '90vw',
                    height: '80vh',
                    maxWidth: '900px',
                    maxHeight: '700px',
                    overflowY: 'hidden', // Prevent overflow on main container
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                    position: 'relative',
                }}
            >
                {/* Top Bar with History and New Chat buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        padding: '10px',
                        borderRadius: '8px 8px 0 0',
                        zIndex: 1,
                    }}
                >
                    <IconButton aria-label="view chat history" sx={{ color: 'black' }}>
                        <HistoryIcon />
                    </IconButton>
                    <IconButton onClick={clearChat} aria-label="new chat" sx={{ ml: 1 }}>
                        <RefreshIcon sx={{ color: 'black' }} /> {/* Change color to black */}
                    </IconButton>
                </Box>

                {showWelcome && (
                    <Typography
                        variant="h4"
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'rgba(0,0,0,0.1)',
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none',
                        }}
                    >
                        Welcome to StuBuddies Chatbot
                    </Typography>
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', paddingBottom: '70px' }}>
                    <Box sx={{ flexGrow: 1, overflowY: 'hidden', padding: '20px 10px' }}>
                        {messages.map((msg, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    mb: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: msg.sender === 'user' ? '#007bff' : '#e0e0e0',
                                        color: msg.sender === 'user' ? 'white' : 'black',
                                        padding: '12px 16px',
                                        borderRadius: '12px',
                                        maxWidth: '70%',
                                        wordBreak: 'break-word',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    {msg.text}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Input Area */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(255, 255, 255, .9)',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                >
                    <IconButton aria-label="attach file" sx={{ color: 'black' }}>
                        <AttachFileIcon />
                    </IconButton>
                    <InputBase
                        sx={{
                            flexGrow: 1,
                            borderRadius: '5px',
                            padding: '5px',
                            marginLeft: '5px',
                            backgroundColor: 'white',
                        }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <IconButton onClick={handleSend} aria-label="send" sx={{ ml: 1, color: 'black' }}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Chatbot;
