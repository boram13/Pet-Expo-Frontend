import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ImageIcon from '@mui/icons-material/Image';

export default function Layout() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setGalleryOpen(!galleryOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Pet Expo
          </Typography>
          <Tooltip title="About Us">
            <IconButton color="inherit" component={Link} to="/about">
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact Us">
            <IconButton color="inherit" component={Link} to="/contact">
              <ContactMailIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/">
              <HomeIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={toggleGallery}>
              <ImageIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Gallery" />
            </ListItem>
            {galleryOpen && (
              <>
                <ListItem button component={Link} to="/gallery/birds">
                  <ListItemText primary="Birds" />
                </ListItem>
                <ListItem button component={Link} to="/gallery/cats">
                  <ListItemText primary="Cats" />
                </ListItem>
                <ListItem button component={Link} to="/gallery/dogs">
                  <ListItemText primary="Dogs" />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: '250px' }}
      >
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
