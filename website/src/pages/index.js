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

    //bear with me.
    return (
        <div class="main">
              <div class="container">
                <div></div>
                <div></div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div><div class="square"></div></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div>4</div>
                <div>5</div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div><div class="square"></div></div>
                <div><div class="thirdtop-square"></div></div>
                <div><div class="square"></div></div>
                <div>1</div>
                <div><div class="square"></div></div>
                <div><div class="thirdtop-square"></div></div>
                <div><div class="thirdtop-square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="thirdtop-square"></div></div>
                <div><div class="thirdtop-square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div>12</div>
                <div>13</div>
                <div><div class="thirdtop-square"></div></div>
                <div>15</div>
                <div><div class="square"></div></div>
                <div>1</div>
                <div><div class="thirdtop-square"></div></div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div><div class="square"></div></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div><div class="square"></div></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div><div class="square"></div></div>
                <div><div class="square"></div></div>
                <div>15</div>
                <div><div class="square"></div></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div><div class="square"></div></div>
                <div><div class="thirdtop-square"></div></div>
                <div>14</div>
                <div><div class="square"></div></div>
                <div><div class="thirdtop-square"></div></div>
                <div class="outgrid-text" style={{top:"13vh",left:"33vw",fontSize:"23vh",backgroundColor:"transparent"}}><h2>pauly</h2></div>
                <div class="outgrid-text" onClick={handleDesign} style={{top:"60vh",left:"8vw",fontSize:"3vh",backgroundColor:"transparent",cursor:"pointer"}}><h2>graphic design</h2></div>
                <div class="outgrid-text" onClick={handleUiux} style={{top:"37vh",left:"35vw",fontSize:"3vh",backgroundColor:"transparent",cursor:"pointer"}}><h2>ui/ux</h2></div>
                <div class="outgrid-text" onClick={handleContact} style={{top:"8vh",left:"76vw",fontSize:"3vh",backgroundColor:"transparent",cursor:"pointer"}}><h2>contact</h2></div>
                <div class="outgrid-text" onClick={handleResume}style={{top:"20vh",left:"60vw",fontSize:"3vh",backgroundColor:"transparent",cursor:"pointer"}}><h2>resume</h2></div>


              </div>
        </div>

    );
};

export default Home;