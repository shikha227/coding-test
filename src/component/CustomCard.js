import React from "react"
import { withStyles,makeStyles } from '@material-ui/core/styles';
import { Card, CardContent ,CardActionArea,Typography,CardActions,Button,CardMedia} from "@material-ui/core";



const useStyles = makeStyles({

    card: {
    position: "relative",
  },
  size: {
          width:'100%'
  },
overlay: {
    position:'absolute',
width:'100%',
height:'15%',
              // backgroundColor:'rgba(255, 255, 255, 0.3)',
               backgroundColor:'rgba(192,192,192,0.9)',
               color:'black',
               bottom:'0',
               left:'0',
               

    
   }
});


 export default  function CustomCard(props) {
  const classes = useStyles();
    return (  
      <div className={classes.root} >
      <Card className={classes.card} >
      <CardMedia >
  <img src='./tile.png' className={classes.size}/>
</CardMedia>
         <CardActions className={classes.overlay}>
         <Button  size="large"
>Image Preview</Button>
        
  </CardActions>
</Card>
     </div> 
   
                  
    );
}
