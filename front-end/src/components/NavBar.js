//import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Library
          </Typography>
          <Button color="inherit" onClick={() => history.push('/books')}>Books</Button>
          <Button color="inherit" onClick={() => history.push('/book')}>Book</Button>
          <Button color="inherit" onClick={() => history.push('/checkout')}>Checkout</Button>
          <Button color="inherit" onClick={() => history.push('/return')}>Return Book</Button>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default NavBar;