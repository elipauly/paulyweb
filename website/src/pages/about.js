import React from "react";
const About = () => {
    return (
        <div>
            <div class="info-block">
            </div>
            <div class="lets-lettering">
                <h2>let's get in</h2>
            </div>
            <div class="contact-lettering">
                <h1>about</h1>
            </div>
            <div>
                <img src={require('../assets/linkedin.jpg')} alt='linkedin' style={{height: 250, objectFit: 'contain'}} />
                
            </div>
            <div>
                <img src={require('../assets/email.png')} alt='email' style={{height:200, objectFit: 'contain'}} />
                <h2>email: @</h2>
            </div>
        </div>
    );
};

export default About;