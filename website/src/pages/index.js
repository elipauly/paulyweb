import './index.css'; 
import React from "react";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react'; 
import { ReactComponent as Squiggle1 } from '../assets/squiggle1.svg';

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
            <Squiggle1 style={{ width: 2000, height: 1000, position: "fixed", top: "57%", left: "50%", transform: "translate(-50%, -50%)", zIndex: -2 }}/>

            <div class="pauly-text"><h2>pauly</h2></div>
            <div class="web-text"><h2>web&</h2></div>
            <div class="design-text"><h2>design</h2></div>

            <div class="block-text" onClick={handleContact} style={{transform: "translate(-262%, -120%)"}}><h2 style={{fontWeight: 550}}>cont</h2></div>
            <div class="block-text" onClick={handleContact} style={{transform: "translate(-1638%, -110%)"}}><h2 style={{fontWeight: 550}}>I</h2></div>
            <div class="block-text" onClick={handleContact} style={{transform: "translate(-371%, -97%)"}}><h2 style={{fontWeight: 550}}>act</h2></div>

            
            <div class="block-text" onClick={handleWork} style={{transform: "translate(-50%, -120%)"}}><h2 style={{fontWeight: 550}}>wo</h2></div>
            <div class="block-text" onClick={handleWork} style={{transform: "translate(-69%, -97%)", letterSpacing: "-1pt"}}><h2 style={{fontWeight: 550}}>rk</h2></div>
            
            <div class="block-text" onClick={handleAbout}style={{transform: "translate(355%, -120%)"}}><h2 style={{fontWeight: 550}}>ab</h2></div>
            <div class="block-text" onClick={handleAbout}style={{transform: "translate(250%, -97%)"}}><h2 style={{fontWeight: 550}}>out</h2></div>

            <div class="square" style={{width: "183px", height: "200px", transform: "translate(15%, 51%)"}}></div>
            {/* <div class="square" style={{transform: "translate(108%, 1%)"}}></div> */}
            <div class="square" style={{transform: "translate(-290%, -146%)"}}></div>
            {/*<div class="square" style={{height: "50%",transform: "translate(-340%, -138%)"}}></div> */}
            <div class="square" style={{transform: "translate(-50%, -146%)"}}></div>
            <div class="square" style={{transform: "translate(190%, -146%)"}}></div>
            {/*<div class="square" style={{height: "50%", transform: "translate(240%, -138%)"}}></div> */}
            
            <div class="container">
                

              </div>
        </div>

    );
};

export default Home;