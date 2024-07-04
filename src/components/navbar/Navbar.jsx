import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, Button, CssBaseline } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const handlePopularBooksClick = () => {
        navigate('/');
    };

    const handleGetRecommendationClick = () => {
        navigate('/recommendations');
    };

    const handleAuthorsClick = () => {
        navigate('/authors');
    };

    return <>
        <CssBaseline />
        <Box flexGrow={1} sx={{ backgroundColor: 'grey' }}>
            <AppBar position='relative'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handlePopularBooksClick}
                        sx={{ mr: 2 }}>
                        <AutoStoriesIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Book-Mania
                    </Typography>
                    <Button color='inherit' variant='text' onClick={handlePopularBooksClick}>
                        Popular Books
                    </Button>
                    <Button color='inherit' variant='text' onClick={handleGetRecommendationClick}>
                        Get Recommendation
                    </Button>
                    <Button color='inherit' variant='text' onClick={handleAuthorsClick}>
                        Authors
                    </Button>
                </Toolbar>
            </AppBar>
        </Box >
    </>
}

export default Navbar
