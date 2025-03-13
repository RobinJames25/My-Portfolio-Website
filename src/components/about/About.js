import React from "react";
import me from '../../assets/img/me.jpg';
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "./About.css"

function About(){
    return(
        <section id="about">

            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="Me" /> 
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <GiGraduateCap className="about__icon"/>
                            <h5>Degree</h5>
                            <small>Bsc.(Hons) Software Engineering(UG) <br /><i>Kirinyaga University.</i></small>
                        </article>
                        
                        <article className="about__card">
                            <BsBookmarkStar className="about__icon"/>
                            <h5>Current GPA</h5>
                            <small>3.2</small>
                        </article>

                        <article className="about__card">
                            <TfiWorld className="about__icon"/>
                            <h5>Domains</h5>
                            <small>
                                <ul>
                                    <li>Web Applications Development</li>
                                    <li>Mobile Applications Development</li>
                                </ul>
                            </small>
                        </article>
                    </div>

                    <p>
                    I am a <b>Software Engineering undergraduate </b> at the Kirinyaga University,
                    eager to find a challenging internship where I can apply and enhance,
                    my technical skills. With a solid academic background in software engineering 
                    and practical experience in multiple programming languages, 
                    I am excited to contribute to innovative projects while learning from seasoned 
                    professionals in the field. I adapt quickly and am always ready to tackle new challenges.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About