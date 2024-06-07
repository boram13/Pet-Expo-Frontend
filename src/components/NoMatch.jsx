import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NoMatch() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="body1">
        Page not found
      </Typography>
    </Box>
  );
}