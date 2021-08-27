//import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) =>({
  root: {
   flexgrow: 1,
  },
  title: {
    flexGrow: 1,
  }
}));

function NavBar (props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Library
          </Typography>
          <Button color="inherit">Books</Button>
          <Button color="inherit">Book</Button>
          <Button color="inherit">Checkout</Button>
          <Button color="inherit">Return Book</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;