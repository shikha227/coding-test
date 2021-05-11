import React from "react"
import {Container,Box,IconButton,Icon,Link,Typography,Paper} from '@material-ui/core';
import { fade, makeStyles,withStyles } from "@material-ui/core/styles";
import Grid, { GridSpacing } from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({

paper: {
      padding: theme.spacing(1),

  },
   iconButton :{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems:'center',
    padding: theme.spacing(1),
    width:'100%',
},

  gridItemRight :{
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems:'center',
},
gridItemLeft :{
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems:'center',
},
  cssPurple: {
    color : '#6200EE',
    fontWeight: 'bold',
  },


}));


export default function Social(props){
                 const classes = useStyles();

                    return(

   <Paper elevation={2} className={classes.paper}>
         <Grid container >
        <Grid item  xs={6} className={classes.gridItemLeft}>
          <Typography variant="body2" gutterBottom >
   {props.text}
      </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight} >
          {props.image && <Icon className={classes.iconButton}  >
              <img src={props.image}/>
  </Icon>}
        <Typography variant="button" display="block" gutterBottom>
  <Link href="#" className={classes.cssPurple}>
  {props.msg}
  </Link>
  </Typography>
        </Grid>
        </Grid>

       </Paper >

                    	)

}