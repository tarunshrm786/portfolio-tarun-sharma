import { Grid, Box, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    image: '/images/project2.jpg',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Box py={5}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
