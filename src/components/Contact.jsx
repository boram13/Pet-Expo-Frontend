import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Contact() {
  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: "auto", mt: 8 }}>
      <Typography variant="h2" gutterBottom align="center">
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        Whether you have a question about our services or anything else, our team is ready to answer all your questions.
      </Typography>
      <Box component="form" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" color="primary" size="large" type="submit">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}