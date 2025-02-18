import React, { useState } from 'react';
import '../Styles/global.css';
import Rating from 'react-rating';
import heroImage from '../Assets/img1.jpg';
import heroImage2 from '../Assets/irng2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faTachometerAlt,
  faEllipsisV,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import { FaWater } from 'react-icons/fa';
import { BiBarChart } from 'react-icons/bi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { HiOutlineSparkles } from 'react-icons/hi';
import { GoArrowUpRight } from 'react-icons/go';

const Hero = () => {
  const [rating, setRating] = useState(0);

  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          The Future of Manufacturing
          <br />
          with <span>Latest Technology</span>
        </h1>
        <p>
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn">Get Started</button>
          <button className="hero-btn">Try Demo</button>
        </div>

        {/* Rating & Waves Icon */}
        <div className="rating-container">
          <div className="rating">
            <Rating
              initialRating={rating}
              emptySymbol={
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: '#ccc', height: '30px' }}
                />
              }
              fullSymbol={
                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
              }
              fractions={2}
              onChange={(value) => setRating(value)}
            />
            <p>{rating.toFixed(1)}/5.0 Rating (Based on 500+ Reviews)</p>
          </div>
        </div>

        <div className="image-grid">
          <div className="image-box0">
            <img
              src={heroImage}
              alt="Descriptive Alt Text"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="image-box2">
            <h1>100+</h1>
            <p>
              Our estimated <br /> clients and <br />
              partners
            </p>
          </div>
          <div className="image-box3">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTable} className="icon-left" />
              <FontAwesomeIcon icon={faEllipsisV} className="icon-right" />
            </div>
            <h2>Total Projects 8%</h2>
            <h1>1951+</h1>
            <p className="increase-text">
              Increase of <span>126</span> this month
            </p>
          </div>

          <div className="image-box2i">
            <h1>6+</h1>
            <p>
              Years of <br /> Dedicated <br />
              Service
            </p>
          </div>
          <div
            className="image-box1"
            style={{
              backgroundImage: `url(${heroImage2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="text-container">
              <div className="icon-container">
                <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
              </div>
              <p>
                Archive Optimal <br /> Efficiency and Boost <br /> Productivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
