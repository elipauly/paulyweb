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
                <div class="column" style={{paddingTop: "48vh"}}>
                    <h2>graphic design</h2>
                </div>
                <div class="column"></div>
                <div class="column" style={{paddingTop: "22vh"}}>
                    <h2>ui/ux</h2>
                </div>
                <div class="column"></div>
                <div class="column" style={{paddingTop: "12vh"}}>
                    <h2>resume</h2>
                </div>
                <div class="column" style={{paddingTop: "2vh"}}>
                    <h2>contact</h2>
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