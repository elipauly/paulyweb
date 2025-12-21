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

            <div class="block-text" onClick={handleContact} style={{transform: "translate(-261%, -120%)"}}><h2>cont</h2></div>
            <div class="block-text" onClick={handleContact} style={{transform: "translate(-369%, -97%)"}}><h2>act</h2></div>

            
            <div class="block-text" onClick={handleWork} style={{transform: "translate(-50%, -120%)"}}><h2>wo</h2></div>
            <div class="block-text" onClick={handleWork} style={{transform: "translate(-69%, -97%)", letterSpacing: "-1pt"}}><h2>rk</h2></div>
            
            <div class="block-text" onClick={handleAbout}style={{transform: "translate(363%, -120%)"}}><h2>ab</h2></div>
            <div class="block-text" onClick={handleAbout}style={{transform: "translate(250%, -97%)"}}><h2>out</h2></div>

            <div class="container">
                

              </div>
        </div>

    );
};

export default Home;