import React, { useState } from 'react';
import '../css/ClientReview.css';
import client1 from '../image/about/client-1.webp';
import client2 from '../image/about/client-2.webp';
import client3 from '../image/about/client-3.webp';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    image: client1,
    name: 'Charles',
    role: 'Chief Architect',
    description:
      'Platea dictumst quisque sagittis purus sit amet. Porta nibh venenatis cras sed. Pharetra pharetra massa massa ultricies mi quis. Nunc congue nisi vitae suscipit. Velit scelerisque in dictum non consectetur a. Ut diam aliquam.',
  },
  {
    image: client2,
    name: 'Robert',
    role: 'VP Marketing',
    description:
      'Mattis ullamcorper velit sed ullamcorper morbi. Ultrices in iaculis nunc sed augue. Mi tempus imperdiet nulla malesuada pellentesque. Scelerisque fermentum dui faucibus in ornare quam. Justo donec enim vulputate ut.',
  },
  {
    image:client3,
    name: 'Henkel',
    role: 'Manager',
    description:
      'Aliquam vestibulum morbi blandit cursus risus. Pretium fusce id velit ut. Blandit massa enim nec dui nunc mattis enim. Libero enim sed faucibus turpis. Malesuada fames ac turpis egestas sed tempus. Amet nulla morbi tempus iaculis.',
  },
];

const ClientReview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">
        <div className="image-box">
          <img src={current.image} alt="Client Photo" />
          <span className="quote">“</span>
          <div className="author-info">
            <h3>{current.name}</h3>
            <p>{current.role}</p>
            <div className="counter">
              <span className="current">0{currentIndex + 1}</span> —{' '}
              <span className="total">0{testimonials.length}</span>
            </div>
          </div>
        </div>

        <div className="content-box">
          <p className="description">{current.description}</p>
          <div className="bottom-bar">
            <div className="nav-buttons">
              <button onClick={handlePrev} aria-label="Previous testimonial">
                <span className="arrow-icon">
                  <i className="bi bi-arrow-left"></i>
                </span>
              </button>
              <button onClick={handleNext} aria-label="Next testimonial">
                <span className="arrow-icon">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="heading-box">
        <p className="subheading">Reviews</p>
        <h2 className="heading">Our Happy Clients Thought</h2>
      </div>
    </section>
  );
};

export default ClientReview;
