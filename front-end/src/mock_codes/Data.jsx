const Data = (props) => { 
 let { books } = props
 return (
   <tbody>
       {
           books.map((book, index) => {
               let { id, book_title, author } = book;

               return (
                   <tr data-id={`${id}`}>
                       <td>{id}</td>
                       <td>{book_title}</td>
                       <td>{author}</td>
                   </tr>   
               )})}   
  </tbody>
 );
}

export default Data; 