import React from "react";
import "./About.css";
import githubImg from "../../images/github.png";
import linkedinImg from "../../images/linkedin.png";


function  About() {
    return(
        <div className="about_container">
            <p className="about_text1"><span className="highlighted_text">Hi,</span> my name is</p>
            <p className="about_text2">Shubham Verma.</p>
            <p className="about_text3">I am a software Devloper <span className="highlighted_text">somewhere.</span></p>
            <p className="about_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            <div>
                <a href="https://www.github.com/shubham3936" target="_blank">
                    <img src={githubImg} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/shubham-verma-b833b3192/" target="_blank">
                    <img src={linkedinImg} alt="linkedin" />
                </a>
            </div>
            <a href="mailto: shubhamvarma20899@gmail.com">
            <button className="about_button">Get in Touch</button>
            </a>
            
        </div>
    )
}

export default About;