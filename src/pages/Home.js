import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const sliderImages = [
  { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1350&q=80', alt: 'Bookshelf' },
  { src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1350&q=80', alt: 'Open book' },
  { src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1350&q=80', alt: 'Stack of books' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1350&q=80', alt: 'Person reading' },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Counters
  const [booksSold, setBooksSold] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [yearsService, setYearsService] = useState(0);

  useEffect(() => {
    let bs = 0, hc = 0, ys = 0;
    const bsTarget = 10000;
    const hcTarget = 5000;
    const ysTarget = 10;
    const duration = 2000; // 2 seconds
    const intervalTime = 30;

    const bsIncrement = bsTarget / (duration / intervalTime);
    const hcIncrement = hcTarget / (duration / intervalTime);
    const ysIncrement = ysTarget / (duration / intervalTime);

    const interval = setInterval(() => {
      bs += bsIncrement;
      hc += hcIncrement;
      ys += ysIncrement;

      setBooksSold(Math.min(Math.floor(bs), bsTarget));
      setHappyCustomers(Math.min(Math.floor(hc), hcTarget));
      setYearsService(Math.min(Math.floor(ys), ysTarget));

      if (bs >= bsTarget && hc >= hcTarget && ys >= ysTarget) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Slider */}
      <div className="slider">
        {sliderImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className={`slide ${idx === currentSlide ? 'active' : ''}`}
          />
        ))}
        <button className="prev" onClick={() => setCurrentSlide((currentSlide - 1 + sliderImages.length) % sliderImages.length)}>&#10094;</button>
        <button className="next" onClick={() => setCurrentSlide((currentSlide + 1) % sliderImages.length)}>&#10095;</button>
      </div>

      {/* Description */}
      <section className="description">
        <h2>Welcome to Book Haven</h2>
        <p>
          At Book Haven, we connect readers with stories that inspire, educate, and entertain. Our mission is to create a welcoming space for book lovers to discover their next favorite read.
        </p>
        <p>
          Whether you’re looking for timeless classics, contemporary bestsellers, or hidden gems, our curated collection has something for everyone. Join our community and dive into the world of books!
        </p>
      </section>

      {/* Counters */}
      <section className="counters">
        <div className="counter-box">
          <h3>{booksSold.toLocaleString()}+</h3>
          <p>Books Sold Till Now</p>
        </div>
        <div className="counter-box">
          <h3>{happyCustomers.toLocaleString()}+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="counter-box">
          <h3>{yearsService}+</h3>
          <p>Years in Service</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Book Rentals</h3>
            <p>Rent your favorite books for a limited time at affordable prices.</p>
          </div>
          <div className="service-card">
            <h3>Author Events</h3>
            <p>Meet your favorite authors and attend exclusive book signings.</p>
          </div>
          <div className="service-card">
            <h3>Personalized Recommendations</h3>
            <p>Get book suggestions tailored to your tastes from our experts.</p>
          </div>
          <div className="service-card">
            <h3>Community Book Clubs</h3>
            <p>Join discussions and share your love of reading with others.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;