import { Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="textSecondary">
        I am a passionate developer with experience in React, JavaScript, and more.
      </Typography>
    </Box>
  );
}
