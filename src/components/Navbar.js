// import { useState } from 'react';
// import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Link from 'next/link';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const drawerList = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {['Home', 'About', 'Projects', 'Contact'].map((text) => (
//           <ListItem button key={text} component={Link} href={`/${text.toLowerCase()}`}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//         <ListItem button component="a" href="https://www.linkedin.com/in/tarun-sharma-737b39145/" target="_blank" rel="noopener noreferrer">
//           <ListItemText primary="LinkedIn Profile" />
//         </ListItem>
//         <ListItem button component="a" href="https://github.com/tarunshrm786" target="_blank" rel="noopener noreferrer">
//           <ListItemText primary="GitHub" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar position="static" sx={{ bgcolor: 'black' }}>
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Tarun Sharma Portfolio
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             <Button color="inherit" component={Link} href="/">Home</Button>
//             <Button color="inherit" component={Link} href="/about">About</Button>
//             <Button color="inherit" component={Link} href="/projects">Projects</Button>
//             <Button color="inherit" component={Link} href="/contact">Contact</Button>
//             <Button color="inherit" href="https://www.linkedin.com/in/tarun-sharma-737b39145/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</Button>
//             <Button color="inherit" href="https://github.com/tarunshrm786" target="_blank" rel="noopener noreferrer">GitHub</Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawerList()}
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} href="/" passHref>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} href="/about" passHref>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} href="/projects" passHref>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} href="/contact" passHref>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component="a" href="https://www.linkedin.com/in/tarun-sharma-737b39145/" target="_blank" rel="noopener noreferrer">
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="LinkedIn Profile" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/tarunshrm786" target="_blank" rel="noopener noreferrer">
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Tarun Sharma Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" component={Link} href="/">Home</Button>
            <Button color="inherit" component={Link} href="/about">About Me</Button>
            <Button color="inherit" component={Link} href="/projects">Projects</Button>
            <Button color="inherit" component={Link} href="/contact">Contact</Button>
            <Button color="inherit" href="https://www.linkedin.com/in/tarun-sharma-737b39145/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</Button>
            <Button color="inherit" href="https://github.com/tarunshrm786" target="_blank" rel="noopener noreferrer">GitHub</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Navbar;
