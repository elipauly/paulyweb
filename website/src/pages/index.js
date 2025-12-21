import './index.css'; 
import React from "react";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react'; 

const Home = () => {
    const nav = useNavigate();
    const handleContact = () =>{
        nav('/contact');
    };
    const handleAbout = () =>{
        nav('/about');
    };
    const handleWork = () =>{
        nav('/work');
    };

    //bear with me.
    return (
        <div class="main">
            <div class="pauly-text"><h2>pauly</h2></div>
            <div class="web-text"><h2>web&</h2></div>
            <div class="design-text"><h2>design</h2></div>

            <div class="outgrid-text" onClick={handleContact} style={{top:"8vh",left:"76vw",fontSize:"3vh",backgroundColor:"transparent",cursor:"pointer"}}><h2>contact</h2></div>
            <div class="outgrid-text" onClick={handleWork} style={{top:"60vh",left:"8vw",fontSize:"3vh",backgroundColor:"transparent",cursor:"pointer"}}><h2>work</h2></div>
            <div class="outgrid-text" onClick={handleAbout}style={{top:"20vh",left:"60vw",fontSize:"3vh",backgroundColor:"transparent",cursor:"pointer"}}><h2>about</h2></div>
            <div class="container">
                

              </div>
        </div>

    );
};

export default Home;