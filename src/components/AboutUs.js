import React from 'react';
import WorkCard from './WorkCard';
import MyWork from './MyWorkTable';

import imgReact from './images/react.jpg';
import imgJS from './images/JS.png';
import imgHtml from './images/Html.png';
import Box from '@material-ui/core/Box';

function AboutUs() {
    const [props,setprops]=React.useState([{img:`${imgHtml}`,text:'Html/Css/Bootstrap',id:'1',path:'/htmlCssBootstrap'},{img:`${imgReact}`,text:'React JS',id:'2',path:'/htmlCssBootstrap'},{img:`${imgJS}`,text:'Javascript/ES6',id:'3',path:'/htmlCssBootstrap'}]);
    // let { path, url } = useRouteMatch();
    return(
        <>
         <h1 style={{justifyContent:'center',textAlign:'center',margin:'auto'}}>My Skills</h1>
              <br/>
         <Box display="flex" justifyContent="flex-start" m={1} p={1}>

        {props.map((item)=>(
             <Box p={1}>
               
               <WorkCard key={item.id} image={item.img}text={item.text}/>
           
               
               </Box>
              
              
              
               ))}
                </Box>
                <h1 style={{justifyContent:'center',textAlign:'center',margin:'auto'}}>My Apps</h1>
              <br/>
              <MyWork/>  
        {/* <WorkCard text={props.text}/> */}
        </>
    )
}

export default AboutUs
