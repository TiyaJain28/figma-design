import React, { useEffect, useRef } from 'react';
import './Progress.css';
import progressImage from '../assets/progress.png';

const Progress = () => {
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
    <section className="progress-sec" id="progress" ref={ref}>
      <div className="container progress-sec__inner">
        <div className="progress-sec__visual fade-up">
          <div className="progress-sec__img-wrap">
            <div className="progress-sec__img-placeholder">
              <img
                src={progressImage}
                alt="Progress"
                className="progress-sec__image"
              />
            </div>
          </div>
        </div>

        <div className="progress-sec__text fade-up stagger-2">
          <h2 className="progress-sec__heading">
            See how we can
            <br />
            help you <span className="progress-sec__italic">progress</span>
          </h2>

          <p className="progress-sec__body">
            We are a provider of fearless insights and action that allows
            change makers to accelerate their progress in areas such as
            brand, design, digital and social research.
          </p>

          <a href="#services" className="progress-sec__link">
            Read more <span>——</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Progress;