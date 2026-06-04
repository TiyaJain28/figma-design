import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tomorrow from './components/Tomorrow';
import Progress from './components/Progress';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Tomorrow />
        <Progress />
        <Services />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;