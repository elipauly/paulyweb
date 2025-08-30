import './index.css'; 
import React from "react";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react'; 

const Home = () => {
    const nav = useNavigate();
    const handleDesign = () =>{
        nav('/design');
    };
    const handleUiux = () =>{
        nav('/uiux');
    };
    const handleResume = () =>{
        nav('/resume');
    };
    const handleContact = () =>{
        nav('/contact');
    };

    return (
        <div class="main">
              <div class="flex-container">

                <div class="column" style={{paddingTop:"22.1vh"}}>
                    <div class="square"></div>
                </div>
                <div class="column" style={{paddingTop:"22.1vh"}}>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
                <div class="column" style={{paddingTop:"22.1vh"}}>
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                     <div class="square"></div>
                   
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
            
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>
                <div class="column">
                    <div class="square"></div>
                    
                </div>

              </div>
            <h1>puly</h1>
            <button onClick={handleDesign}>to design</button>
            <button onClick={handleUiux}>to uiux</button>
            <button onClick={handleResume}>to resume</button>
            <button onClick={handleContact}>to contact</button>
        </div>

    );
};

export default Home;