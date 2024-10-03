import React, { useRef } from 'react';
import brand from '../assets/company.png';
import emailjs from '@emailjs/browser';

import './home.css'; // Import your CSS file for styling

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jpn6wkg', 'template_o8nemw4', form.current, {
        publicKey: 'dURkrzhsB6XTw-UOK',
      })
      .then(
        () => {
          alert('Message sent, thank you!');
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.log('Message failed...', error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-card">
        <div className="contact-image">
          <img src={brand} alt="Contact" />
        </div>
        <div className="contact-fields">
          <h3>Contact Us</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phoneNumber"
                name="user_phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="comments"
                name="message"
                rows="4"
                placeholder="Comments"
                required
              ></textarea>
            </div>
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
