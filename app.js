import React from 'react';
import Header from './src/components/Header';
import About from './src/components/About';
import Portfolio from './src/components/Portfolio';
import Contact from './src/components/Contact';
import Resume from './src/components/Resume';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
