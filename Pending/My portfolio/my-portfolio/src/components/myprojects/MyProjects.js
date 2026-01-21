import React from "react";
import Image1001 from "../../assets/img/Image1001.png";
import Image1002 from "../../assets/img/Image1002.png";
import Image1003 from "../../assets/img/Image1003.png";
import Image1004 from "../../assets/img/Image1004.png";
import "./MyProjects.css";



function MyProjects(){
    return(
        <section id="myprojects">
            <h5>My Recent Works</h5>
            <h2>Projects</h2>

        <div className="container portfolio__container">
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={Image1002} alt="Random quote generator"/>
                </div>
                <h3>Random Quote Generator</h3>
                <small className="text-light">React js + CSS</small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/RobinJames25/Quote-Generator" target="_blank" rel="noreferrer" className="btn">Github</a>
                </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={Image1003} alt="Movie review app"/>
                </div>
                <h3>Movie-Review-Application</h3>
                <small className="text-light">Frontend(React js, Bootstrap) && Backend(Node js, Express Js, MongoDB)</small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/RobinJames25/Movie-Review-App" target="_blank" rel="noreferrer" className="btn">Github</a>
                </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={Image1001} alt="Movie review app"/>
                </div>
                <h3>Multi-Step-Form</h3>
                <small className="text-light">React js + Typescript + Tailwind CSS </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/RobinJames25/MultiStepForm" target="_blank" rel="noreferrer" className="btn">Github</a>
                </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={Image1004} alt="Movie review app"/>
                </div>
                <h3>Conference-Ticket-Generator</h3>
                <small className="text-light">React js + Typescript + Tailwind CSS </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/RobinJames25/Conference-Ticket-Generator" target="_blank" rel="noreferrer" className="btn">Github</a>
                </div>
            </article>

        </div>
        </section>
    )
}

export default MyProjects