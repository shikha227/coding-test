import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MintingSection from './MintingSection';
import {Container,Box,IconButton,Icon,Link,Typography,Paper} from '@material-ui/core';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Social from './Social'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems :'center',
    '& > *': {
      margin: theme.spacing(3,3,3,3),
      padding: theme.spacing(0),

    },
  },
     paper: {
      padding: theme.spacing(1),

  },



}));

export default function Home() {
  const classes = useStyles();

  return (
   <Grid container  className={classes.root} > 
        
      <Grid item xs={10} md={8} lg={8} >
      <Paper elevation={2} >
      <Social image={"./lnkd.png"} text={"Connect your LinkedIn account and increase your authenticity score."} msg={"CONNECT"}/>
      <Social image={"./twiter.png"} text={"Connect your twitter account and increase your authenticity score."} msg={"CONNECT"}/>
      <Social text={"Download kollektor.io wallet and connect your phone."} msg={"Download Wallet"}/>
      <MintingSection/>
      </Paper>
      </Grid>
     
    </Grid>
  );
}
