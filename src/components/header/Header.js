import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import me from "../../assets/img/me.jpg";
import "./Header.css"

function Header(){
  return(
    <header id="home">
        <div className="container header__container">
            <h5>Hello, I'm</h5>
            <h1>Robins Obiri</h1>
            <h5 className="text-light">Software Engineer Undergraduate</h5>
            <CTA />
            <Socials />

        <div className="me">
          <img src={me} alt="me"/>
        </div>

        <a href="#contacts" className="scroll__down">Scroll Down</a>
        </div>
    </header>
  )  
}

export default Header;