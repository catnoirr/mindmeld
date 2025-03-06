'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/hero2.jpg',
    heading: 'Expert Guidance ',
    title: 'Latest Strategies ',
    buttonText: 'Get Started',
    buttonLink: '/contact-us'
  },
  {
    id: 2,
    image: '/hero6.jpg',
    heading: 'Innovative Ideas',
    title: 'Marketing Plans',
    buttonText: 'Learn More',
    buttonLink: '/services'
  },
  {
    id: 3,
    image: '/hero1.jpg',
    
    heading: 'Real Professionals',
    title: 'Field Expertise',
    buttonText: 'Explore Now',
    buttonLink: '/about'
  }
];

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[550px] overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            animate={{ 
              scale: [1.2, 1]
            }}
            transition={{ 
              duration: 8,
              ease: "linear",
              times: [0, 1]
            }}
          >
            <Image
              src={slides[currentSlide].image}
              alt="Business background"
              fill
              className="object-cover brightness-[0.65]"
              priority
              sizes="100vw"
            />
          </motion.div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-2xl  mt-20">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-xl font-medium text-white leading-tight mb-2"
                >
                  {slides[currentSlide].heading}
                </motion.h2>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Link 
                    href={slides[currentSlide].buttonLink}
                    className="inline-flex items-center px-8 py-4 text-base font-medium text-white border border-white rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    {slides[currentSlide].buttonText}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomeHero;
