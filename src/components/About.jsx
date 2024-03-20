import React, { useState } from 'react';
import { motion } from "framer-motion";
import PortSlider from './PortSlider';

const About = () => {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [portfolioExpanded, setPortfolioExpanded] = useState(false);

  const handleAboutClick = () => {
    setAboutExpanded(!aboutExpanded);
    setPortfolioExpanded(false);
  };

  const handlePortfolioClick = () => {
    setAboutExpanded(false);
    setPortfolioExpanded(!portfolioExpanded);
  };

  return (
    <div className='flex items-center justify-center w-full h-screen p-7 md:mt-10'>
      <div className='flex flex-col items-center justify-center mx-auto mt-10'>
        <div
          id="about"
          className={`section font-grilla text-3xl md:text-5xl mt-10 md:mt-0 ${aboutExpanded ? 'move-up' : ''}`}
          onClick={handleAboutClick}>
          ABOUT
        </div>
        {aboutExpanded && (
          <motion.div
            className="flex flex-col circles md:mt-0 md:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <div className="m-2 circle ">
              <div className="p-10 mx-3 my-8 text-sm font-semibold text-center text-white">
              I'm a passionate software developer with a deep love for art and video games. Creativity fuels my work, driving me to seek out diverse and dynamic environments where I can thrive. With a background in software development, I bring a unique blend of technical expertise and creative thinking to every project. I'm known for my perseverance, outgoing nature, and humble demeanor, always ready to tackle new challenges with enthusiasm and drive.
              </div>
            </div>
          </motion.div>
        )}

        <div
          id="portfolio"
          className={`section font-grilla text-3xl md:text-5xl md:mt-0 ${portfolioExpanded ? 'move-down' : ''}`}
          onClick={handlePortfolioClick}> PORTFOLIO
        </div>
        {portfolioExpanded && (
          <motion.div
            className="flex flex-col md:mt-0 md:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            
          >
            <PortSlider />

          </motion.div>


        )}
      </div>
    </div>
  )
}

export default About;

