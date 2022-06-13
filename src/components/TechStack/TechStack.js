import React from "react";

import "./TechStack.css";
import react from "../../images/TechStack/react.png";
import c from "../../images/TechStack/c.png";
import firebase from "../../images/TechStack/firebase.png";
import github from "../../images/TechStack/github.png";
import html from "../../images/TechStack/html.png";
import css from "../../images/TechStack/css.png";
import js from "../../images/TechStack/js.png";
import cpp from "../../images/TechStack/cpp.png";




function TechStack()
{
    return (
        <div className="techstack_container">
            <p className="techstack_title">Tech Stack</p>    
            <div className="techstack_image_rows_container">
                <div className="techstack_image_container_row1">
                    <div className="techstack_image_element_container">
                        <img src={react} alt="reactImage" />
                        <p>React</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={js} alt="jsImage" />
                        <p>JavaScript</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={html} alt="htmlImage" />
                        <p>HTML</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={firebase} alt="firebaseImage" />
                        <p>Firebase</p>
                    </div>
                </div>
                {/* tech stack row 2 */}
                <div className="techstack_image_container_row1">
                    <div className="techstack_image_element_container">
                        <img src={css} alt="cssImage" />
                        <p>CSS</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={github} alt="githubImage" />
                        <p>Github</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={c} alt="cImage" />
                        <p>C</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={cpp} alt="c++Image" />
                        <p>C++</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TechStack;