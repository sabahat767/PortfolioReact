import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 400
  },
  bg:{
    color:'white',
    backgroundColor:'#e91e63'
  }
});

const columns=[
{title:'html/css/bootstrap'},
{title:'js'},
{title:'html/css/bootstrap'},
];

const rows = [
  { id: 1, html: 'Saylani Home Page', js: 'Meal Finder', react: 'Todo List',link:'https://sabahat767.github.io/OlineAssignment-03/',link1:'https://meal-finder-replica.netlify.app/',link2:'https://todolist-reacttoolkit.netlify.app/' },
  { id: 2, html: 'Bootstrap Company Temp', js: 'Stop Watch', react: 'Covid App',link:'https://sampletheme-assign1.netlify.app/ ',link1:'https://sabahat767.github.io/StopWatch-Assignment-08/',link2:'https://dashboardcovidapp.herokuapp.com/' },
  { id: 3, html: 'Software Store', js: 'Calculator', react: 'Ecomerce Store With Fake Api and Firebase Authentication',link:'https://softwarestorewebdesign.firebaseapp.com/ ',link1:'https://sabahat767.github.io/Calculator-Assignment7/',link2:'https://storewithfakeapi.herokuapp.com/ ' },
  { id: 4, html: 'Css Pacman Animation', js: 'Quiz App', react: 'OlX Home Front-End',link:'https://css-animation-pacman.netlify.app/  ',link1:'https://sabahat767.github.io/QuizApp/',link2:'https://olx-react-aee72.firebaseapp.com/ ' },

  // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // createData('Periodic Table','Calculator','OlX website FrontEnd', 'TodoApp with Firebase'),
  // createData('Simple Html Form With Css', 'StopWatch', 'covid-19 Dashboard', 'ChatApp with firebase'),
  // createData('SAYLANI Home Page', 'Quiz App', 'Shopping App', ''),
  // createData('Bootstrap Company Template', 'Todo App ', 'Chat App with React js', ''),
  // createData('Pacman Animation', 'Meal Finder (with Api Data)', '', ''),
  // createData('Software Store', 'Chat App with javascript', '', ''),
];

function MyWork(){
   const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <TableCell className={classes.bg}>Html/Css/Bootstrap</TableCell>
            <TableCell className={classes.bg} >Javascript/ES6</TableCell>
            <TableCell className={classes.bg} >React</TableCell>
            {/* <TableCell className={classes.bg} align="right">Firebase Database</TableCell> */}
            
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell   > <a href={row.link}>{row.html}</a></TableCell>
              <TableCell ><a href={row.link1}>{row.js}</a></TableCell>
              <TableCell><a href={row.link2}>{row.react}</a></TableCell>
              {/* <TableCell align="right"><a href=''>{row.id}</a></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default MyWork;
// import React from 'react';
// import {Table} from 'react-bootstrap'
// function MyWork(){
// return(
//   <>
//  <Table striped bordered hover>
//   <thead className='ml-5'>
//     <tr >
//       <th>#</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table>
//   </>
// )
// }
// export default MyWork;