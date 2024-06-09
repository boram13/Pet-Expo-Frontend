import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: '2.5rem',
          color: '#2c3e50'    
        }}
      >
        Welcome to Pet Expo!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem', 
          color: '#34495e'   
        }}
      >
        Discover a variety of pets including cats, dogs, and birds.
      </Typography>
    </Box>
  );
}
