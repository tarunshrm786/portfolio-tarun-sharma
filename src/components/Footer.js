import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} textAlign="center" sx={{ position: 'fixed', bottom: 0, width: '100%', bgcolor: 'background.paper' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Tarun Sharma Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
