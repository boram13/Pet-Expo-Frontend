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
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleGallery = () => {
    setGalleryOpen(!galleryOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Menu">
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 1 }}>
            Pet Expo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
      <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem button component={Link} to="/" onClick={closeDrawer}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={closeDrawer}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={closeDrawer}>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button onClick={toggleGallery}>
              <ListItemText primary="Gallery" />
            </ListItem>
            {galleryOpen && (
              <>
                <ListItem button component={Link} to="/gallery/birds" onClick={closeDrawer}>
                  <ListItemText primary="Birds" />
                </ListItem>
                <ListItem button component={Link} to="/gallery/cats" onClick={closeDrawer}>
                  <ListItemText primary="Cats" />
                </ListItem>
                <ListItem button component={Link} to="/gallery/dogs" onClick={closeDrawer}>
                  <ListItemText primary="Dogs" />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}