import { Typography, Box, Link, Grid, Card, CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <Box textAlign="center" py={5}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
         
              <Box textAlign="left">
                <Typography variant="body1" gutterBottom display="flex" alignItems="center">
                  <EmailIcon sx={{ mr: 1 }} /> Email: <Link href="mailto:tarunshrm768@gmail.com" sx={{ ml: 1 }}>tarunsharma@example.com</Link>
                </Typography>
                <Typography variant="body1" gutterBottom display="flex" alignItems="center">
                  <PhoneIcon sx={{ mr: 1 }} /> Phone: <Link href="tel:+918318919787" sx={{ ml: 1 }}>+91 8318919787</Link>
                </Typography>
                <Typography variant="body1" gutterBottom display="flex" alignItems="center">
                  <LocationOnIcon sx={{ mr: 1 }} /> Location: <span sx={{ ml: 1 }}>Prayagraj, Uttar Pradesh, India</span>
                </Typography>
                <Typography variant="body1" gutterBottom display="flex" alignItems="center">
                  <GitHubIcon sx={{ mr: 1 }} /> GitHub: <Link href="https://github.com/tarunshrm786?tab=repositories" target="_blank" rel="noopener noreferrer" sx={{ ml: 1 }}>https://github.com/tarunshrm786</Link>
                </Typography>
                <Typography variant="body1" gutterBottom display="flex" alignItems="center">
                  <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn: <Link href="https://www.linkedin.com/in/tarun-sharma-737b39145/" target="_blank" rel="noopener noreferrer" sx={{ ml: 1 }}>https://www.linkedin.com/in/tarunsharma/</Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}


