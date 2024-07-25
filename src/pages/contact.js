import { Typography, Box, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" variant="outlined" />
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
        <TextField label="Message" fullWidth margin="normal" variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Send
        </Button>
      </form>
    </Box>
  );
}
