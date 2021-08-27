import { makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Book({book}) {
  const classes = useStyles();
  return (
    <>
      <TableCell align="center">{book.id}</TableCell>
      <TableCell align="center">{book.book_title}</TableCell>
      <TableCell align="center">{book.author}</TableCell>
      <TableCell align="center">{book.isbn_number}</TableCell>
      <TableCell align="center">{book.is_checked_out ? 'Yes': 'No'}</TableCell>
    </>
  );
}
export default Book;