import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Socials(){
    return(
        <div className="socials">
            <a href="https://www.linkedin.com/in/robinjames25/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/RobinJames25" target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
    )
}

export default Socials;