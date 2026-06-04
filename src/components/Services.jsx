import React, { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    category: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
    arrow: '→',
  },
  {
    category: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
    arrow: '→',
  },
  {
    category: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
    arrow: '→',
  },
];

const Services = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services__header fade-up">
          <h2 className="services__heading">
            What we <span className="services__accent">can</span><br />
            offer you!
          </h2>
        </div>

        <div className="services__list fade-up stagger-2">
          {services.map((s, i) => (
            <a href="#contact" key={i} className="services__item">
              <div className="services__left">
                <span className="services__category">{s.category}</span>
              </div>
              <div className="services__right">
                <span className="services__title">{s.title}</span>
                <span className="services__icon">—</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;