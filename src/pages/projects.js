import { Grid, Box, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Vestige',
   // description: 'Description of project one.',
    image: '/images/projects-image.jpg',
    url: 'https://www.myvestige.com/'
  },
  {
    title: 'Growth91',
   // description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https://growth91.com/'
  },
  {
    title: 'Jadecaps',
    //description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https://www.jadecaps.com/'
  },
  {
    title: 'Tech Blogs',
    //description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https://nextjs-blog-app-tarun-sharma.vercel.app/'
  },
//   {
//     title: 'Jira Issue Tracker',
//     //description: 'Description of project two.',
//     image: '/images/projects-image.jpg',
//     url: 'https://project-two-url.com'
//   },
  {
    title: 'Material UI Dashboard',
    //description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https://material-ui-project-tarun-sharma.vercel.app/'
  },
  {
    title: 'Grunerrenewable',
    //description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https://grunerrenewable.com'
  },
  {
    title: 'Ramagyagroup',
    //description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https:/ramagyagroup.com/'
  },

  {
    title: 'Random Image Generator',
    //description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https://kaleidoscopic-unicorn-336e08.netlify.app/'
  },

  {
    title: 'Portfolio',
    //description: 'Description of project two.',
    image: '/images/projects-image.jpg',
    url: 'https://portfolio-tarun-sharma.vercel.app/'
  },

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
