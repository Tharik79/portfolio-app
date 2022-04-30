import React from "react";
import './content.css';
import About  from "./about/about.js";
import Work from "./work/work";
import Contact from './contact/contact';
import Separator from "../separator/separator";
import Skills from './skills/sk';
import MyProject from "./projects/myProject";

const Content = () => {
    return(
        <div className="body"> 
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Separator/>
                <h2 className="pr-title">Projects</h2>
                <h2 className="pr-title">Let's go through my Projects </h2>
                
                <MyProject/>
            </section>
            <section id="skills">
               <Separator/> 
               <h2>What are my Skills ?</h2> 
              
               <Skills/>
               
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}
export default Content;