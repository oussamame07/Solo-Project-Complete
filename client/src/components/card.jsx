import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';

export default function MediaCard() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        // backgroundImage: 'url(https://wallpapercave.com/wp/wp7452142.png)',
        backgroundSize: '200vw',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: '80px'
        
      }}
      grap={100}
    >
      <ImageList sx={{ width: 1200, height: 950, }} gap={20}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Options</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://e7.pngegg.com/pngimages/690/354/png-clipart-pizza-pizza-food.png',
    title: 'Pepproni',
    author: '@ChefBourak',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://e7.pngegg.com/pngimages/526/288/png-clipart-pizza-pizza.png',
    title: 'Neptune',
    author: '@Chef Itali',
  },
  {
    img: 'https://e7.pngegg.com/pngimages/935/770/png-clipart-pizza-pizza.png',
    title: 'Pepproni',
    author: '@Chef Burak',
  },
  {
    img: 'https://e7.pngegg.com/pngimages/6/806/png-clipart-pizza-pizza.png',
    title: 'Haliwiin',
    author: '@Americain',
    cols: 2,
  },
];
