// src/about.jsx
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './style.css';

export default function About() {
  return (
    <>
      <Header current="about" />
      <main className="container">
        <section className="section-title">
          <h3>About Areesan</h3>
        </section>

        <section className="about-card">
          <p>
            Actually this whole flower store is solely created for my frotend project - hehehe!🤭 and also I really enjoyed while doing this whole making. When I was starting this project to make an E-commerce
            website, I had many domains in my mind like skincare & beauty, fashion, book store and soooo on. But then the flower store idea hit me. So I decided to be a florist 💐.

          </p><br></br>
          <p>
            Basically, I am a black fav🖤,but for flowers it will be good if it has a light theme ✨. So finally, I took two main colours that are  white🤍 and my new fav Rosewood pink🩷.
            For the name "Areesan", it is the backwards of my name.
          </p><br></br>
          <p>
            I know the prices are too high but I won't decrease them🙅🏻‍♀️. What! Its my store, and my wish to set the prices however I want🤷🏻‍♀️.
          </p>

          <div style={{ display: 'flex', gap: 20, marginTop: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', padding: 12 }}>
              <h4 style={{ color: '#b14e6f' }}>4</h4>
              <p>Hours spent</p>
            </div><br></br><br></br>
            <div style={{ textAlign: 'center', padding: 12 }}>
              <h4 style={{ color: '#b14e6f' }}>Naseera Faiza Shaik😎</h4>
              <p>Founder, Creator, UI/UX Desiginer,<br />🙂 Web developer</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
