import React, { useState } from 'react'
import { motion } from "framer-motion";


const About = () => {
  const [moveUp, setMoveUp] = useState(false);
  const [moveDown, setMoveDown] = useState(false);

  const handleAboutClick = () => {
    setMoveUp(!moveUp);
    setMoveDown(false);
  };

  const handlePortfolioClick = () => {
    setMoveDown(!moveDown);
    setMoveUp(false);
  };
  return (
    <div id="about" className='h-screen w-full p-7 md:mt-10 relative'>
      <div className='flex flex-col h-full items-center justify-center'>
        <div id="about" className={`section font-grilla text-3xl md:text-5xl mt-64 md:mt-0 ${moveUp ? 'move-up' : ''}`}
          onClick={handleAboutClick}>
          ABOUT
        </div>
        <div>
          {moveUp && (
            <div className={`circles flex flex-col mt-48 md:mt-0 md:flex-row ${moveUp || moveDown ? 'active' : ''}`}>
              <motion.div
                className="circle m-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              />
              <motion.div
                className="circle m-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              />
              <motion.div
                className="circle m-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              />
            </div>
          )}
        </div>

        <div
          id="portfolio"
          className={`section font-grilla text-3xl md:text-5xl ${moveDown ? 'move-down' : ''}`}
          onClick={handlePortfolioClick}> PORTFOLIO
        </div>

        {/* <p className='text-white'> <br />As a forward-thinking software developer, finding the right company is paramount to me. I'm not simply pursuing employment; I'm on a quest to join a community that cherishes diversity and inclusivity as deeply as I do. I firmly believe that embracing diverse perspectives is fundamental to revolutionizing the tech sector, and I'm enthusiastic about leveraging my own distinct background in this endeavor. My ultimate objective is to play a pivotal role in crafting innovative solutions that generate meaningful and positive change in the world. </p> */}
      </div>
    </div>
  )
}

export default About