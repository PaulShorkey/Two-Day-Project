import React, {useEffect, useState}  from "react";
import { makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Book from './Book.js';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Books({books}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">  
        <TableHead>
          <TableRow>
            <TableCell align="center">Book ID</TableCell>
            <TableCell align="center">Book Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">ISBN Number</TableCell>
            <TableCell align="center">Checked out?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { books.map((book, index) => {
            return (
              <TableRow key={index} >
                <Book book={book} />
              </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Books;