import React from "react"
import {Container,Box,IconButton,Icon,Link,Typography,Paper} from '@material-ui/core';
import { fade, makeStyles,withStyles } from "@material-ui/core/styles";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
   withoutIcon: {
    color : '#6200EE',
    fontWeight: 'bold',
    padding:theme.spacing(0,0,0,1),
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
          {props.twitterKey && <TwitterIcon color="primary"  fontSize="large"/>}
          {props.linkedinKey && <LinkedInIcon color="primary"  fontSize="large"/>}
        <Typography variant="button" display="block" gutterBottom>
  <Link href="#" className={props.image?classes.cssPurple:classes.withoutIcon}>
  {props.msg}
  </Link>
  </Typography>
        </Grid>
        </Grid>

       </Paper >

                    	)

}