import React from "react";
import { MdOutlineEmail } from 'react-icons/md';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contacts.css";

function Contacts(){
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wpxcz5s', 'template_vb8if7a', form.current, 'AwrSsIb_vK4bTNhk-')
          .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
          }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again.');
          });
        
        e.target.reset();
      };
    

return(
    <section id="contacts">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">

                <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h5>jamesrobin12432@gmail.com</h5>
                    <a href="mailto:jamesrobin12432@gmail.com">Send a message</a>
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>

                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>
)
}

export default Contacts