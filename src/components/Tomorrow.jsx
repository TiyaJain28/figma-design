import React, { useEffect, useRef } from 'react';
import './Tomorrow.css';
import teamImage from '../assets/team.png';

const Tomorrow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');

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
    <section className="tomorrow" id="studio" ref={ref}>
      <div className="container tomorrow__inner">
        <div className="tomorrow__text fade-up">
          <h2 className="tomorrow__heading">
            Tomorrow should
            <br />
            be <span className="tomorrow__underline">better</span> than today
          </h2>

          <p className="tomorrow__body">
            We are a team of strategists, designers, communicators,
            researchers. Together, we believe that progress only happens
            when you refuse to play things safe.
          </p>

          <a href="#services" className="tomorrow__link">
            Read more <span className="tomorrow__arrow">——</span>
          </a>
        </div>

        <div className="tomorrow__visual fade-up stagger-2">
          <div className="tomorrow__img-wrap">
            <div className="tomorrow__img-placeholder">
              <img
                src={teamImage}
                alt="Team"
                className="tomorrow__image"
              />
            </div>

            <div className="tomorrow__shape tomorrow__shape--pink" />
            <div className="tomorrow__shape tomorrow__shape--coral" />
          </div>

          <div className="tomorrow__deco tomorrow__deco--rect" />
        </div>
      </div>
    </section>
  );
};

export default Tomorrow;