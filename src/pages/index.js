// import { Typography, Box, Button, Avatar } from '@mui/material';
// import { styled } from '@mui/system';

// const HeroSection = styled(Box)(({ theme }) => ({
//   backgroundImage: 'url("/images/projects-image.jpg")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   padding: theme.spacing(8, 2),
//   textAlign: 'center',
//   color: '#fff',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

// const ProfileImage = styled(Avatar)(({ theme }) => ({
//   width: theme.spacing(20),
//   height: theme.spacing(20),
//   margin: theme.spacing(4, 0),
// }));

// export default function Home() {
//   return (
//     <>
//       <HeroSection>
//         <Typography variant="h2" gutterBottom>
//           Welcome to My Portfolio
//         </Typography>
//         <Typography variant="h6">
//           Showcasing my projects and skills.
//         </Typography>
//       </HeroSection>
//       <Box textAlign="center" py={5}>
//         <ProfileImage alt="Tarun Sharma" src="/images/profile.jpg" />
//         <Typography variant="h4" gutterBottom mt={2}>
//           About Me
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph>
//           I am a passionate developer with experience in React, JavaScript, and more. My aim is to build impactful software that improves the lives of users.
//         </Typography>
//       </Box>
//       <Box textAlign="center" py={5}>
//         <Button variant="contained" color="primary" href="/projects">
//           Check My All Projects
//         </Button>
//       </Box>
//       <Box textAlign="center" py={5} bgcolor="#f5f5f5">
//         <Typography variant="h4" gutterBottom>
//           Download My Resume
//         </Typography>
//         <Button variant="contained" color="primary" href="/files/resume.pdf" target="_blank">
//           Download Resume
//         </Button>
//       </Box>
//     </>
//   );
// }

import { Typography, Box, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/images/projects-image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  color: '#fff',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  margin: theme.spacing(4, 0),
}));

export default function Home() {
  return (
    <>
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" gutterBottom>
          Showcasing my projects and skills.
        </Typography>
        <Button 
          variant="contained" 
          sx={{ 
            mt: 3, 
            backgroundColor: 'black', 
            '&:hover': {
              backgroundColor: 'grey',
            }
          }} 
          href="/projects"
        >
          My Live Projects
        </Button>
      </HeroSection>
      {/* <Box textAlign="center" py={5}>
        <ProfileImage alt="Tarun Sharma" src="/images/profile.jpg" />
        <Typography variant="h4" gutterBottom mt={2}>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          I am a passionate developer with experience in React, JavaScript, and more. My aim is to build impactful software that improves the lives of users.
        </Typography>
      </Box>
      <Box textAlign="center" py={5} bgcolor="#f5f5f5">
        <Typography variant="h4" gutterBottom>
          Download My Resume
        </Typography>
        <Button variant="contained" color="primary" href="/files/resume.pdf" target="_blank">
          Download Resume
        </Button>
      </Box> */}
    </>
  );
}
