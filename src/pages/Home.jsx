
import React from 'react';
import Hero from '../components/Hero';
import HomeS1 from '../components/HomeS1';
import HomeS2 from '../components/HomeS2';
import HomeS3 from '../components/HomeS3';
import HomeS4 from '../components/HomeS4';
import HomeS5 from '../components/HomeS5';
import HomeS6 from '../components/HomeS6';
import '../styles/Home.css'
export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <HomeS1 />
      <HomeS2 />
      <HomeS3 />
      <HomeS4 />
      <HomeS5 />
      <HomeS6 />
    </div>
  );
}


