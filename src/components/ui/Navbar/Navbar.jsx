import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const trigger = useScrollTrigger({ target: window });
  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={setOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LocalMoviesIcon />
                      </ListItemIcon>
                      <ListItemText primary="Фильмы" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
            <Typography
              sx={{ color: 'white', textDecoration: 'none' }}
              variant="h5"
              component={Link}
              to="/"
            >
              Divan
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
