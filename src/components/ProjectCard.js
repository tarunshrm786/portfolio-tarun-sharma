// import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

// const ProjectCard = ({ title, description, image }) => {
//   return (
//     <Card>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={image}
//           alt={title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default ProjectCard;

import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const ProjectCard = ({ title, description, image, url }) => {
  return (
    <Card>
      <CardActionArea
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
