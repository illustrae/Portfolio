import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className='sm:h-screen lg:h-screen lg:w-[600px] sm:w-full'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 60, restDelta: 0.006 } }} className="text-gradient font-poppins text-[45px]"> About Me </ motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.5, ease: 'easeIn', duration: 1.5, delay: 2 }} className='flex m-1'>
        <p className='text-white'> I grew up in Philly and spent a decade of my life in Houston, I've been immersed in the world of technology and have become proficient in various coding languages. Now, I'm eager to expand my skills and embark on a fulfilling journey as a developer. Finding the right company is crucial to me, as I'm seeking an inclusive environment that celebrates diversity. I strongly believe that diverse perspectives can revolutionize the tech industry, and I'm thrilled to contribute my unique experiences to create innovative solutions that make a positive impact. </p>
        </motion.div>
    </div>
  )
}

export default About