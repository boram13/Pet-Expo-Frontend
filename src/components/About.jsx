import { Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Pet Expo is your one-stop destination for all kinds of pets.
        We love pets and are dedicated to providing the best information about them. This is an expo which holds different 
        information about pets. We hope you enjoy it! There are three categories of pets included: dogs, cats, and birds. 
        Pets must be part of each one of our lives, and they deserve our love and kindness!
      </Typography>
    </Box>
  );
}