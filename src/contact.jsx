import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './style.css';
import { showToast } from './components/Toast.jsx';

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    showToast('Thanks — your message has been received (demo).');
    e.target.reset();
  };

  return (
    <>
      <Header current="contact" />
      <main className="container">
        <section className="section-title">
          <h3>Get in touch</h3>
        </section>

        <section>
          <p style={{ textAlign: 'center', color: '#5b4a4f' }}>Questions about a custom arrangement or large event? Drop us a note.</p>

          <form className="form" onSubmit={onSubmit}>
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" rows="5" placeholder="Message" required />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
