import { Box } from "@mui/material";
import { Typography } from "@mui/material";
export default function Home() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Welcome to Pet Expo!
      </Typography>
      <Typography variant="body1">
        Discover a variety of pets including cats, dogs, and birds.
      </Typography>
    </Box>
  );
}