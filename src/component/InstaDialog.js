import React from 'react';
import {Button,GridListTile,DialogContent,
  GridList,Grid,Box,Typography,DialogTitle,Dialog,DialogActions,IconButton,Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


 const tileData = [
  {
     img: 'dialog/image1.png',
     title: 'Image1',
     author: 'author',
     cols: 3,
    },
   {
  img: 'dialog/image3.png',
     title: 'tile.png',
     author: 'author',
     cols: 1,
    },
    {
  img: 'dialog/image3.png',
     title: 'Image3',
     author: 'author',
     cols: 1,
    },
     {
  img: 'dialog/image3.png',
     title: 'image4',
     author: 'author',
     cols: 1,
    },
    {
  img: 'dialog/image5.png',
     title: 'Image5',
     author: 'author',
     cols: 1.5,
    },
     {
  img: 'dialog/image5.png',
     title: 'Image5',
     author: 'author',
     cols: 1.5,
    },
  ];


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow:'1',
    margin: theme.spacing(1,0,0,0),
  },
  border:{
     border: "2px solid black",
  },
   item:{

    [theme.breakpoints.up("md")]: {
       width:"100%",
    },
  
   },
   button: {
      width:'100%',
  },
 cssPurple: {
    color : '#6200EE',
    fontWeight: 'bold',
  }
}));

 


export default function InstaDialog(){

const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState();


  const handleClose = () => {
       setSelected(selected);
           setOpen(false);

     };

  const handleGridItemClick = (index,value) => {
    setSelected(index);
    
  };
   const handleClickOpen = () => {
    setSelected(-1);
    setOpen(true);
    
  };


 return(
<Box className={classes.root}>
<Button variant="outlined" onClick={handleClickOpen} size="large" className={classes.button}>
<Typography variant="button" display="block" gutterBottom>
 Choose Instagram Image
 </Typography>
 </Button>
<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title"><Typography variant="body2" gutterBottom>
      Select image from your Instagram feed...
        </Typography>
      </DialogTitle>
      <DialogContent>
  <GridList   className={classes.border} cols={3}>
  {tileData.map((tile,index) => (
    <GridListTile key={tile.img} cols={tile.cols || 1} className={index === selected ? classes.stringelected :classes.border}
            key={`${index}${tile.title}`}
      >
      <img src={tile.img} alt={tile.title} onClick={() => handleGridItemClick(index,tile.title)}    />
    </GridListTile>
  ))}
</GridList>
        
 
      </DialogContent>
                  <DialogActions>
          <Button onClick={handleClose} className={classes.cssPurple}>
            Cancel
          </Button>
          <Button onClick={handleClose} className={classes.cssPurple}>
            Select
          </Button> 
          </ DialogActions>      
     </Dialog>
 </Box>
 )

  }