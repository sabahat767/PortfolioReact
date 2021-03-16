import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const useStyles = makeStyles({
  root: {
    width: 475,
    display:'inline-flex',
    margin:'20px',
    justifyContent:'center'
  },
  bullet: {
    display: 'inline-block',
    justifyContent:'center',

    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <>
    <Card className={classes.root}>
      <CardContent>
        <Typography  variant="h5" component="h2" gutterBottom>
      
       <SchoolIcon style={{fontSize:'2em'}}/>
          Qualification
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <ul>
             <li>
             Matriculation
             </li>
             <li>
             Intermediate
             </li>
             <li>
             BSSE (Software Engineering/underGraduate)
             </li>
                 </ul>
        </Typography>
       
      </CardContent>
      
    </Card>
     <Card className={classes.root}>
     <CardContent>
     <Typography  variant="h5" component="h2" gutterBottom>
    <ImportantDevicesIcon style={{fontSize:'2em'}}/>
    Development Skills
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
       <ul>
           <li>
           <b>Front End:</b> HTML, CSS, JavaScript, ES6, React.
           </li>
           <li>
           <b>Back End:</b> Node.js using Express, C#, Python.

           </li>
           <li>
           <b>Database:</b> Firebase, MongoDB, SQL.

           </li>
          
               </ul>
      </Typography>
      
     </CardContent>
   
   </Card>
     </>
  );
}