import React from 'react';
import { Button,Grid,Box,Typography,FormControlLabel,FormGroup,Switch} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InstaDialog from './InstaDialog';
import AddIcon from '@material-ui/icons/Add';
import CustomCard from './CustomCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  item: {
     padding: theme.spacing(2),
     display:'flex',
     flexDirection:'column',
     justifyContent:'space-between',
  },  
 
  uploadArtWork: {
    color: theme.palette.textPrimary || '#BB1FA2',
    width:'100%',
    justifyContent: 'center',
  },

  formgroup:{
    display: 'flex',
    flexDirection: 'column',
  alignItems:'flex-end',
  },

   textField: {
      width:'100%',
      justifyContent: 'center',
  },

  info: {
      margin: theme.spacing(2,0,0,0),
  },

  cssLabel: {
    color : '#BB1FA2',
  },
  cssPurple: {
    color : '#6200EE',
    fontWeight: 'bold',
  },
  
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#BB1FA2 !important'
  },
  
}));


export default function MintingSection(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };



return(
  <div>
      <Grid className={classes.root} container >
        <Grid item xs={12} md={6} lg={6} className={classes.item}>
             
        <box>
		          <Typography variant="h5" gutterBottom>

Mint your own authentic NFTs</Typography>

		 <Typography variant="body2" gutterBottom>
		Upload an image, add a description and select if
		you want to mint a free test NFT or a paid, real one.
		The NFT will be saved in your wallet,.
    </Typography>
</box>
<Box className={classes.upload} >

<Button className={classes.uploadArtWork}  variant="outlined" size="large"
startIcon={<AddIcon />}>Upload Artwork</Button>
 
 <InstaDialog/>
 </Box >
</Grid>
<Grid item xs={12} md={6} lg={6} className={classes.item}>
<CustomCard />
</Grid>
 </Grid>
 
 <Grid className={classes.root} container >
        <Grid item xs={12} md={6} lg={6} className={classes.item}>
<Box>
         <TextField
          label="label"
          id="outlined-size-normal"
          defaultValue="Description"
          variant="outlined"
          inputProps={
          { readOnly: true, }
        }  className={classes.textField}  

           InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric"
          }}
        />
  
    <Grid container>
     <Grid item xs={6} md={6} lg={6} className={classes.item}>
        <Typography variant="subtitle1" gutterBottom>
            Use TestNet (free) </Typography>
     </Grid>
       
      <Grid item xs={6} md={6} lg={6}  className={classes.formgroup} >
        <FormGroup >
 <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} p="0" /> }
    
                />
        </FormGroup>
        </Grid>
        </Grid>
         </Box> 
 </Grid>

<Grid item xs={12} md={6} lg={6} className={classes.item}>
 <Box width="90%">
 <TextField  id="outlined-size-normal"
          defaultValue="<Your Wallet Address>"
          variant="outlined"
          inputProps={
          { readOnly: true, }
        }  className={classes.textField}  
        />
       <Typography variant="subtitle1" gutterBottom>
 Your wallet adress on Algorand[mainnet/Testnet]</Typography>
</Box>
 <Grid  container className={classes.info}>  
<Grid item xs={6}>
 <Typography variant="button" display="block" gutterBottom>

                        I Need More Information 
                      </Typography> 
</Grid>
<Grid item xs={6}>
<Typography variant="button" display="block" gutterBottom  align="right" className={classes.cssPurple}>
                        MINT NFT
                      </Typography> 
</Grid>
</Grid >



        </Grid>
          </Grid>
 </div>         

		)
}
