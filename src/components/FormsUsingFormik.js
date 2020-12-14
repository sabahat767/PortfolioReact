import React from 'react'
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'semantic-ui-css/semantic.min.css';
import { Header, Icon, Image } from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
    },
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function FormsUsingFormik() {
  const [data, setdata] = React.useState("");
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      subject:'',
      message:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      setdata(values)
    },
  });
  console.log(data)
  
  return (
    <div style={{border:'2px solid black',width:'50%',justifyContent:'center',textAlign:'center',margin:'auto'}}>
       <Header as='h1' icon textAlign='center'>
      <Icon name='phone' circular />
      <Header.Content>Contact Us</Header.Content>
    </Header>
    <form onSubmit={formik.handleSubmit}>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      {/* *******input for name***** */}
      <TextField id="standard-basic"  name="name"
         type="name" onChange={formik.handleChange}
         value={formik.values.name} label="Your Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
        {/* *******input for email***** */}
        <TextField id="standard-basic"  name="email"
         type="email" onChange={formik.handleChange}
         value={formik.values.email} label="Your Email" />
        </Grid>
        <Grid item xs={12} sm={6}>
        {/* *******input for email***** */}
        <TextField id="standard-basic"  name="subject"
         type="subject" onChange={formik.handleChange}
         value={formik.values.subject} label="Subject" />
        </Grid>
        <Grid item xs={12} sm={6} >
        <TextareaAutosize rowsMin={2} aria-label="manimum height" id='message' name='message'  onChange={formik.handleChange}  value={formik.values.message} placeholder="Your Message" />
        </Grid>
    </Grid>
    </form>
      <form onSubmit={formik.handleSubmit}>
       {/* <TextField label="Outlined" variant="outlined"
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       /> */}
       {/* <button type="submit">Submit</button> */}
       <Button variant="contained"  type="submit"  style={{backgroundColor:"#e91e63",borderRadius:'10px',color:'white'}}>
  Submit
</Button>
     </form>
    </div>
  )
}

export default FormsUsingFormik

//************without using formik library */
// export default FormsUsingFormik
// import React,{useState} from 'react'

// function FormsUsingFormik() {
//   const [data, setdata] = useState("");
  
//   const handleSubmit = (evt) => {
//       evt.preventDefault();
//      console.log(`Submitting Name ${data}`)
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <label>
//         Frirst Name:
//         <input
//           type="text"
//           value={data}
//           onChange={e => setdata(e.target.value)}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//   )
// }


