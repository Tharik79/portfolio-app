import React from "react";
import './contact.css';
import Separator from './../../separator/separator';
import ContactForm from "./contactForm";



const Contact = () => {
    return (
      <div className="contact">
        <Separator />
        <label className="contact-title">Contact</label>
        <div className="contact-details">
          <div className="contact-text">
            <p>Want to get in touch? Contact me on</p>
            
          </div>
          <div className="contact-section">
            <div className="contact-left">
              <div className="img-phone">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"
                alt=""
              />{" "}
              +919952043729 
              </div>
              <img className="img-phone"
                src="https://img.icons8.com/windows/32/000000/email-sign.png"
                alt=""
              />
                <h2 className="con-txt">thaarik@gmail.com </h2>
              <img className="img-phone"
                src="https://img.icons8.com/material-outlined/24/000000/marker.png"
                alt=""
              />{" "}
                <h2 className="con-txt">Chennai</h2>
            </div>
            <div className="contact-right">
              <h2>Contact Form</h2>
              <ContactForm />
            </div>
          </div>
          
        </div>
      </div>
    );
}
export default Contact;