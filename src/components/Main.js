import React from 'react';
import '../Styles/global.css';
import { FaArrowUp, FaWrench, FaBox } from 'react-icons/fa';
import { MdStars, MdBarChart } from 'react-icons/md';
import { GiCube, GiShield } from 'react-icons/gi';
import { GoArrowUpRight } from 'react-icons/go';

function MainSection() {
  const services = [
    {
      icon: <MdStars size={40} className="icon-lg" />,
      title: 'Production and Assembly',
      description:
        'Details on production processes, assembly, capacity, and product types.',
    },
    {
      icon: <GiCube size={40} className="icon-lg" />,
      title: 'Custom Manufacturing',
      description:
        'Custom product creation with design and customization options.',
    },
    {
      icon: <FaWrench size={40} className="icon-lg" />,
      title: 'Quality Control',
      description:
        'Procedures and systems in place to ensure high product quality.',
    },
    {
      icon: <GiShield size={40} className="icon-lg" />,
      title: 'Technology and Innovation',
      description:
        'Details on the latest manufacturing technologies and ongoing innovations.',
    },
    {
      icon: <FaBox size={40} className="icon-lg" />,
      title: 'Packaging and Logistics',
      description:
        'Packaging and logistics for shipping to customers and distributors.',
    },
    {
      icon: <MdBarChart size={40} className="icon-lg" />,
      title: 'Consulting & Market Research',
      description:
        'Services to help companies understand market needs and provide strategic advice.',
    },
  ];

  return (
    <section className="main-section">
      <h2>
        Efficient and Integrated
        <br /> Manufacturing Services
      </h2>
      <p>Simplify operations with our efficient, quality-focused services.</p>

      <div className="main-section-box">
        {services.map((service, index) => (
          <div key={index} className="box1">
            <div className="up-arrow">
              <GoArrowUpRight size={20} />
            </div>
            {service.icon}
            <h2>{service.title}</h2>
            <h3>{service.description}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainSection;
