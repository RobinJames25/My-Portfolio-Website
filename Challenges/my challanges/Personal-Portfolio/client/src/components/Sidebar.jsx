import { useState } from 'react';
import '../css/About.css'
import myAvatar from '../assets/me.jpeg';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={myAvatar} alt="Robin James" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Robin James">Robin James</h1>
                    <p className="title">Web developer</p>
                </div>
                <button className='info_more-btn' onClick={() => setIsOpen(!isOpen)}>
                    <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="mail-outline" role="img" className="md hydrated" aria-label="mail outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a className="contact-link" href="mailto:richard@example.com">jamesrobin12432@gmail.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="phone-portrait-outline" role="img" className="md hydrated" aria-label="phone portrait outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a className="contact-link" href="tel:+254700767131">+(254) 700767131</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="calendar-outline" role="img" className="md hydrated" aria-label="calendar outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time datetime="2003-06-19">June 19, 2003</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="location-outline" role="img" className="md hydrated" aria-label="location outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Kutus, Kirinyaga, Kenya</address>
                        </div>
                    </li>
                </ul>
                <div className="separator"></div>
                <ul className="social-list">
                    <li className="social-item">
                        <a className="social-link" href="#">
                            <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a className="social-link" href="#">
                            <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a className="social-link" href="#">
                            <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}