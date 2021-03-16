import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

function Main() {
    return (
      <div style={{height:'100%',width:'100%'}}>
          <Navbar/>
      {/* <Home/>
      <AboutUs/>
      <ContactUs/> */}
      </div>
    );
  }
  
  export default Main;