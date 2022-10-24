import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Item } from '../utils/UI';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export const CharacterListItem = (props) => {
  return (
    <Card container sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid item xs={4}>
          <Item>
            <Grid container>
              <Grid sx={{ maxWidth: 345 }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <CardMedia component="img" height="194" image={props.charItem.image} alt="Paella dish" />
                </Typography>
              </Grid>
              <Grid>
                <CardContent>
                  <Typography variant="">{props.charItem.name}</Typography>
                  <Typography variant="" component="div">
                    Gender: {props.charItem.gender}
                  </Typography>
                  <Typography variant="" component="div">
                    Status: {props.charItem.status}
                  </Typography>
                  <Typography variant="" component="div">
                    Species: {props.charItem.species}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </CardContent>
    </Card>
  );
};
