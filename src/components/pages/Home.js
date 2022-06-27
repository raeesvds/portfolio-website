import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Form from '../Form';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
