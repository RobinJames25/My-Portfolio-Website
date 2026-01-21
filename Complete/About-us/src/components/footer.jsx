import React from 'react'
import './css/footer.css'

const Footer = () => {
    return (
    <footer className='footer'>
       <div className="container footer-content">
      
        <section className="footer-section" aria-labelledby="footer-about">
            <h3 id="footer-about">Coast Jobs</h3>
            <p>
            Connecting job seekers with exclusive opportunities in Kenya's coastal region. We support young people by simplifying access to meaningful employment.
            </p>
        </section>

        <section className="footer-section" aria-labelledby="footer-links">
            <h3 id="footer-links">Quick Links</h3>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#employers">About Us</a></li>
            </ul>
        </section>

        <section className="footer-section" aria-labelledby="footer-contact">
            <h3 id="footer-contact">Contact Us</h3>
            <p>
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
            +254 705021940
            </p>
            <p>
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <a href="mailto:jobs@coastjobs.co.ke" aria-label="Email Coast Jobs">
                jobs@coastjobs.co.ke
            </a>
            </p>
            <div className="social-links">
            <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
            </a>
            </div>
        </section>

    </div>

    <div className="footer-bottom">
      <p>
        © <span id="current-year"></span> Coast Jobs. All Rights Reserved.
      </p>
    </div>
  </footer>
    )
}

export default Footer