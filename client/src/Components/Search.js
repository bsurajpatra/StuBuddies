import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const mockResults = [
      { id: 1, name: 'John Doe', type: 'person' },
      { id: 2, name: 'Jane Smith', type: 'community' },
      { id: 3, name: 'React Developers', type: 'community' },
      { id: 4, name: 'Alice Johnson', type: 'person' },
    ];

    const filteredResults = mockResults.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
  };

  const suggestedPeople = [
    { id: 1, name: 'Emily Zhang', type: 'person', description: 'Software engineer specializing in front-end technologies.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'John Doe', type: 'person', description: 'Full-stack developer passionate about React and Node.js.', image: 'https://via.placeholder.com/150' },
  ];

  const suggestedCommunities = [
    { id: 1, name: 'Python Enthusiasts', type: 'community', description: 'A community for Python programmers of all levels.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Full Stack Developers', type: 'community', description: 'Join us to share knowledge and opportunities.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      {/* Search Bar Full Width */}
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <TextField
          variant="outlined"
          placeholder="Search for people or communities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            marginRight: '10px',
          }}
        />
        <IconButton 
          onClick={handleSearch} 
          sx={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', padding: '10px 12px' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Two Sections */}
      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        
        {/* Section for Suggested People */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#007bff' }}>
            Suggested People
          </Typography>
          <Grid container spacing={2}>
            {suggestedPeople.map(person => (
              <Grid item xs={12} sm={6} key={person.id}>
                <Card sx={{ padding: 2, backgroundColor: '#fff', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                  <Avatar
                    alt={person.name}
                    src={person.image}
                    sx={{
                      width: 100,
                      height: 100,
                      margin: '0 auto 10px',
                      border: '2px solid #007bff',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#007bff' }}>
                      {person.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', marginTop: 1 }}>
                      {person.description.length > 50 ? `${person.description.substring(0, 50)}...` : person.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Section for Suggested Communities */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#007bff' }}>
            Suggested Communities
          </Typography>
          <Grid container spacing={2}>
            {suggestedCommunities.map(community => (
              <Grid item xs={12} sm={6} key={community.id}>
                <Card sx={{ padding: 2, backgroundColor: '#fff', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                  <Avatar
                    alt={community.name}
                    src={community.image}
                    sx={{
                      width: 100,
                      height: 100,
                      margin: '0 auto 10px',
                      border: '2px solid #007bff',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#007bff' }}>
                      {community.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', marginTop: 1 }}>
                      {community.description.length > 50 ? `${community.description.substring(0, 50)}...` : community.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
