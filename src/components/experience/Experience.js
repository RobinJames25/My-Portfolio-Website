import React from 'react';
import './Experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

function Experience(){
    return(
        <section id='experience'>
            <h5>The skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>

                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React Js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* End of Frontend */}

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>

                    <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Node js & Express js</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                    
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Mongo db</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                    </article>

                    <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Php</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                    </article>

                    <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>mySQL</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                    </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience