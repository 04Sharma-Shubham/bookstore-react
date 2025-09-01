import React from 'react';
import '../styles/Pricing.css';

const plans = [
  {
    name: 'Basic Plan',
    price: '₹ 1099 / month',
    features: [
      'Access to 100+ eBooks',
      'Monthly newsletter',
      'Standard support',
    ],
  },
  {
    name: 'Premium Plan',
    price: '₹ 1999 / month',
    features: [
      'Access to 500+ eBooks',
      'Monthly newsletter',
      'Priority support',
      'Offline downloads',
    ],
  },
  {
    name: 'Elite Plan',
    price: '₹ 2599 / month',
    features: [
      'Unlimited eBooks access',
      'Monthly newsletter',
      '24/7 support',
      'Offline downloads',
      'Exclusive author events',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map(({ name, price, features }) => (
          <div key={name} className="pricing-card">
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <ul>
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;