import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

import { Character } from 'features/api';

const PersonListItem = ({ name, url }: Character) => {
  const id = url.replace(/\/$/, '').split('/').reverse()[0];

  return (
    <Card key={name} variant="outlined">
      <CardActionArea component={Link} to={`people/${id}`}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`people/${id}`} size="small">
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default PersonListItem;
