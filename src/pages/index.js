import { Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Showcasing my projects and skills.
      </Typography>
    </Box>
  );
}
