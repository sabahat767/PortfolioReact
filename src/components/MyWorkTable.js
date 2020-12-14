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
    minWidth: 650
  },
  bg:{
    color:'white',
    backgroundColor:'#e91e63'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Periodic Table','Calculator','OlX website FrontEnd', 'TodoApp with Firebase'),
  createData('Simple Html Form With Css', 'StopWatch', 'covid-19 Dashboard', 'ChatApp with firebase'),
  createData('SAYLANI Home Page', 'Quiz App', 'Shopping App', ''),
  createData('Bootstrap Company Template', 'Todo App ', 'Chat App with React js', ''),
  createData('Pacman Animation', 'Meal Finder (with Api Data)', '', ''),
  createData('Software Store', 'Chat App with javascript', '', ''),
];

function MyWork(){
   const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <TableCell className={classes.bg}>Html/Css/Bootstrap</TableCell>
            <TableCell className={classes.bg} align="right">Javascript/ES6</TableCell>
            <TableCell className={classes.bg} align="right">React</TableCell>
            <TableCell className={classes.bg} align="right">Firebase Database</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <a href=''>{row.name}</a>
                
              </TableCell>
              <TableCell align="right"> <a href=''>{row.calories}</a></TableCell>
              <TableCell align="right"><a href=''>{row.fat}</a></TableCell>
              <TableCell align="right"><a href=''>{row.carbs}</a></TableCell>
              <TableCell align="right"><a href=''>{row.protein}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default MyWork;