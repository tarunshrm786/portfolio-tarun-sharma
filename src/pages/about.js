import { Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import ReactIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Language';
import NodeJsIcon from '@mui/icons-material/DeveloperMode';
import NextJsIcon from '@mui/icons-material/Extension';
import MaterialUiIcon from '@mui/icons-material/Brush';
import TailwindIcon from '@mui/icons-material/Style';
import CssIcon from '@mui/icons-material/ColorLens';
import JavascriptIcon from '@mui/icons-material/Javascript';
import MongodbIcon from '@mui/icons-material/Storage';
import ReduxIcon from '@mui/icons-material/Sync';

export default function About() {
  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'HTML', icon: <HtmlIcon /> },
    { name: 'Node.js', icon: <NodeJsIcon /> },
    { name: 'Next.js', icon: <NextJsIcon /> },
    { name: 'Material UI', icon: <MaterialUiIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Custom CSS', icon: <CssIcon /> },
    { name: 'JavaScript', icon: <JavascriptIcon /> },
    { name: 'MongoDB', icon: <MongodbIcon /> },
    { name: 'Redux', icon: <ReduxIcon /> },
  ];

  return (
    <Box textAlign="center" py={5}>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        <Grid item xs={12} md={8}>
          <Card sx={{ bgcolor: 'black', color: 'white' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                My Aim
              </Typography>
              <Typography variant="body1">
                To leverage my skills and passion for technology to develop innovative solutions that solve real-world problems and create value for users and businesses alike.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                My Skills
              </Typography>
              <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
                {skills.map((skill) => (
                  <Chip
                    key={skill.name}
                    icon={skill.icon}
                    label={skill.name}
                    clickable
                    color="primary"
                    variant="outlined"
                    sx={{ m: 1, fontSize: '1rem', fontWeight: 'bold' }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
