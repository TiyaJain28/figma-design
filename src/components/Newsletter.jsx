import React, { useRef, useEffect } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.2 }
    );
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="newsletter" id="newsletter" ref={ref}>
      <div className="newsletter__deco newsletter__deco--purple" aria-hidden="true" />
      <div className="newsletter__deco newsletter__deco--frame" aria-hidden="true" />

      <div className="container newsletter__inner">
        <h2 className="newsletter__heading fade-up">
          Subscribe to<br />our newsletter
        </h2>
        <p className="newsletter__sub fade-up stagger-1">
          To make your stay special and even more memorable
        </p>
        <button className="newsletter__btn fade-up stagger-2">Subscribe Now</button>
      </div>
    </section>
  );
};

export default Newsletter;