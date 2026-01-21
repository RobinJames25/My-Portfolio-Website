import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../css/About.css';

export default function About() {
  const [activePage, setActivePage] = useState("About");

  return (
    <main>
    <Sidebar />

    <div className='main-content'>
    <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* ABOUT PAGE */}
        <article className={`about ${activePage === 'About' ? 'active' : ''}`} data-page="about">
                <header>
                    <h2 className="h2 article-title">About me</h2>
                </header>
                <section className="about-text">
                    <p>
                        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                        I enjoy
                        turning complex problems into simple, beautiful and intuitive designs.
                    </p>
                    <p>
                        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                        Moreover, I
                        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                        across your
                        message and identity in the most creative way. I created web design for many famous brand companies.
                    </p>
                </section>

                 {/* services */}
                 <section className="service">
                    <h3 className="h3 service-title">What i'm doing</h3>
                    <ul className="service-list">
                        <li className="service-item">
                            <div className="service-icon-box">
                                <img src="./assets/icon-design.svg" alt="design icon" width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Web design</h4>
                                <p className="service-item-text">
                                    The most modern and high-quality design made at a professional level
                                </p>
                            </div>
                        </li>
                        <li className="service-item">
                            <div className="service-icon-box">
                                <img src="./assets/icon-dev.svg" alt="Web development icon" width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Web development</h4>
                                <p className="service-item-text">
                                    High-quality development of sites at the professional level.
                                </p>
                            </div>
                        </li>
                        <li className="service-item">
                            <div className="service-icon-box">
                                <img src="./assets/icon-app.svg" alt="mobile app icon" width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Mobile apps</h4>
                                <p className="service-item-text">
                                    Professional development of applications for iOS and Android.
                                </p>
                            </div>
                        </li>
                        <li className="service-item">
                            <div className="service-icon-box">
                                <img src="./assets/icon-photo.svg" alt="camera icon" width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Photography</h4>
                                <p className="service-item-text">
                                    I make high-quality photos of any category at a professional level.
                                </p>
                            </div>
                        </li>
                    </ul>
                 </section>

                  {/* testimonials */}
                  <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>
                    <ul className="testimonials-list has-scrollbar">
                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img src="./assets/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar="" />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel Lewis</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                        lot of experience
                                        and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                        consectetur adipiscing
                                        elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img src="./assets/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar="" />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title="">Jessica Miller</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                        lot of experience
                                        and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                        consectetur adipiscing
                                        elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img src="./assets/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar="" />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily Evans</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                        lot of experience
                                        and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                        consectetur adipiscing
                                        elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img src="./assets/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar="" />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry William</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                        lot of experience
                                        and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                        consectetur adipiscing
                                        elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                  </section>
              </article>

              {/* RESUME PAGE */}
              <Resume isActive={activePage === 'Resume'} />

                {/* PORTFOLIO PAGE */}
              <Portfolio isActive={activePage === 'Portfolio'} />

              {/* CONTACT PAGE */}
              <Contact isActive={activePage === 'Contact'} />

    </div>

    </main>
    
  )
}

