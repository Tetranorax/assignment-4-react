import React from 'react';

function Main() {
  return (
    <main className="main">
      <section id="about">
        <h2>About Us</h2>
        <p>This is a sample React website showcasing a modular structure.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <p>We provide various services to meet your needs.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email us at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
      </section>
    </main>
  );
}

export default Main;