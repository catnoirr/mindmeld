import React from 'react'
import HomeHero from './components/Homehero';
import Tagline from './components/Tagline';
import Features from './components/Features';
import Quote from './components/Quote';
import Team from './components/team';
import Office from './components/office';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main className='bg-white overflow-hidden'>
      <HomeHero />
      <Tagline />
      <Features />
      <Quote />
      <Team />
      <Office />
      {/* <Footer /> */}


    </main>
  )
}

