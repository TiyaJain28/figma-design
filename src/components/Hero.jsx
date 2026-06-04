
import React, { useEffect, useRef } from 'react';
import './Hero.css';

import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';
import person5 from '../assets/person5.png';
import person6 from '../assets/person6.png';


const avatars = [
  { img: person1, style: { top: '12%', left: '18%' }, size: 120 },
  { img: person2, style: { top: '28%', left: '5%' }, size: 100 },
  { img: person3, style: { top: '55%', left: '10%' }, size: 110 },
  { img: person4, style: { top: '18%', right: '12%' }, size: 130 },
  { img: person5, style: { top: '40%', right: '6%' }, size: 140 },
  { img: person6, style: { top: '62%', right: '14%' }, size: 100 },
];
const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-up');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    els?.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--pink" />
      <div className="hero__blob hero__blob--yellow" />

      {/* Floating Images */}
      <div className="hero__avatars" aria-hidden="true">
        {avatars.map((a, i) => (
          <div
            key={i}
            className="hero__avatar"
            style={{
              ...a.style,
              width: `${a.size}px`,
              height: `${a.size}px`,
            }}
          >
            <img
              src={a.img}
              alt={`person-${i + 1}`}
              className="hero__avatar-img"
            />
          </div>
        ))}
      </div>

      {/* Decorative shapes */}
      <div className="hero__shape hero__shape--rect" aria-hidden="true" />
      <div className="hero__shape hero__shape--purple" aria-hidden="true" />
      <div className="hero__shape hero__shape--squiggle" aria-hidden="true" />

      <div className="container hero__content">
        <h1 className="hero__headline fade-up">
          The thinkers and
          <br />
          <span className="hero__highlight">doers</span> were changing
          <br />
          the <span className="hero__highlight hero__highlight--green">status quo</span> with
        </h1>

        <p className="hero__sub fade-up stagger-2">
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only happens
          when you refuse to play things safe.
        </p>

        <div className="hero__cta fade-up stagger-3">
          <a href="#studio" className="btn btn--dark">
            Explore Studio
          </a>

          <a href="#services" className="btn btn--outline">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;