import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Book Haven</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Founded in 2008, Book Haven has grown from a small neighborhood bookstore to a beloved community hub for readers of all ages. Our passion for books and dedication to customer satisfaction have earned us the trust of thousands of book lovers.
          </p>
          <p>
            We value diversity, knowledge, and the power of stories to change lives. Our carefully curated collection spans genres and cultures, ensuring that everyone finds something that speaks to them.
          </p>
          <p>
            At Book Haven, we believe in fostering a welcoming environment where readers can explore, learn, and connect. Thank you for being part of our journey.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" alt="Bookstore interior" />
        </div>
      </div>
    </div>
  );
};

export default About;