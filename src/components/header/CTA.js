import React from "react";
import Resume from "../../assets/docs/ObiriRobinsResume.pdf";

function CTA(){
    return(
        <div className="cta">
            <a href={Resume} className="btn">Download CV</a>
            <a href="#contacts" className="btn btn-primary">Contact Me</a>
        </div>
    )
}

export default CTA;