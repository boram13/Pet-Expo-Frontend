import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Expo
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" onClick={toggleDrawer(true)}>
            Gallery
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
      <Drawer anchor="" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/gallery/cats">
              <ListItemText primary="Cats" />
            </ListItem>
            <ListItem button component={Link} to="/gallery/dogs">
              <ListItemText primary="Dogs" />
            </ListItem>
            <ListItem button component={Link} to="/gallery/birds">
              <ListItemText primary="Birds" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}