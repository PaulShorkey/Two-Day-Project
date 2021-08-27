import React, {useEffect, useState}  from "react";
import { makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Book({book, key}) {
  const classes = useStyles();
  return (
      <>
            <TableCell align="center">{book.book_title}</TableCell>
            <TableCell align="center">{book.author}</TableCell>
            <TableCell align="center">{book.isbn_number}</TableCell>
            <TableCell align="center">{book.is_checked_out.toString()}</TableCell>
      </>
    );
  }
  export default Book;