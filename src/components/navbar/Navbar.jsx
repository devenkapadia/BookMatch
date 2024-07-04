import { React, useState, useEffect } from 'react'
import {
    AppBar, Box, Toolbar, Typography, IconButton, Button, CssBaseline, Drawer, List, ListItem, ListItemText, useMediaQuery,
    useTheme, ListItemIcon
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const theme = useTheme();

    const [active, setActive] = useState('popular');

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer open/close

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handlePopularBooksClick = () => {
        navigate('/');
        setActive('popular');
        if (isMobile) setDrawerOpen(false);
    };

    const handleGetRecommendationClick = () => {
        navigate('/recommendations');
        setActive('recommendations');
        if (isMobile) setDrawerOpen(false);
    };

    const handleAuthorsClick = () => {
        navigate('/authors');
        setActive('authors');
        if (isMobile) setDrawerOpen(false);
    };
    // Ensure active state matches initial route on component mount
    useEffect(() => {
        switch (location.pathname) {
            case '/recommendations':
                setActive('recommendations');
                break;
            case '/authors':
                setActive('authors');
                break;
            default:
                setActive('popular');
                break;
        }
    }, [location.pathname]);

    return <>
        <CssBaseline />
        <Box flexGrow={1} sx={{ backgroundColor: 'grey' }}>
            <AppBar position='relative' sx={{ backgroundColor: '#071952' }}>
                <Toolbar>
                    {isMobile ? (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handlePopularBooksClick}
                            sx={{ mr: 2 }}
                        >
                            <AutoStoriesIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" sx={{ flexGrow: 1, color: '#37B7C3' }}>
                        Book-Match
                    </Typography>
                    {!isMobile && (
                        <>
                            <Button
                                variant='text'
                                onClick={handlePopularBooksClick}
                                sx={{
                                    mr: 2,
                                    color: '#37B7C3',
                                    backgroundColor: active === 'popular' ? '#E7F0DC' : 'transparent'
                                }}>
                                Popular Books
                            </Button>
                            <Button
                                variant='text'
                                onClick={handleGetRecommendationClick}
                                sx={{
                                    mr: 2,
                                    color: '#37B7C3',
                                    backgroundColor: active === 'recommendations' ? '#E7F0DC' : 'transparent'
                                }}>
                                Get Recommendation
                            </Button>
                            <Button
                                variant='text'
                                onClick={handleAuthorsClick}
                                sx={{
                                    mr: 2,
                                    color: '#37B7C3',
                                    backgroundColor: active === 'authors' ? '#E7F0DC' : 'transparent'
                                }}>
                                Authors
                            </Button>
                        </>)}
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{ zIndex: theme.zIndex.drawer }}
            >
                <List>
                    <ListItem button onClick={handlePopularBooksClick}>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Popular Books" />
                    </ListItem>
                    <ListItem button onClick={handleGetRecommendationClick}>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Get Recommendation" />
                    </ListItem>
                    <ListItem button onClick={handleAuthorsClick}>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Authors" />
                    </ListItem>
                </List>
            </Drawer>
        </Box >
    </>
}

export default Navbar
