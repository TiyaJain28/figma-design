import React, { useEffect, useRef } from 'react';
import './Testimonial.css';

const testimonial = {
  quote:
    "Elementum delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
  author: 'Client Review',
};

const Testimonials = () => {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        }),
      { threshold: 0.1 }
    );

    els?.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section className="testimonial" id="testimonial" ref={ref}>
      <div className="container testimonial__inner">
        <h2 className="testimonial__heading fade-up">
          What our customer
          <br />
          says <span className="testimonial__underline">About Us</span>
        </h2>

        <div className="testimonial__layout fade-up stagger-2">
          <div className="testimonial__card">
            <span className="testimonial__quote-mark">&ldquo;</span>

            <p className="testimonial__text">
              {testimonial.quote}
            </p>

            <span className="testimonial__quote-mark testimonial__quote-mark--end">
              &rdquo;
            </span>

            <p className="testimonial__author">
              — {testimonial.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;