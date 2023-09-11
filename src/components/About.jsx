import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className='sm:h-screen lg:h-screen md:h-screen lg:w-[600px] sm:w-full'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 60, restDelta: 0.006 } }} className="text-gradient font-poppins text-[45px]"> About Me </ motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.5, ease: 'easeIn', duration: 1.5, delay: 2 }} className='flex m-1'>
        <p className='text-white'> I grew up in Philadelphia and spent a good decade of my life in Houston. Learned a lot of life lessons and picked up the skills to become a developer. I have learned various coding languages and Im ready to take my skills to the next level. I currently help others gain the knowledge of becoming a developer while also working out bugs and teaching them to become resourceful. <br/><br/><hr/><br/> Finding the right company is a big deal for me. I'm not just after a job; I'm seeking a community that values diversity and inclusivity as much as I do. I truly believe that diverse perspectives are the key to transforming the tech industry, and I'm eager to bring my own unique experiences to the table. My goal is to contribute to innovative solutions that create a positive impact in the world. </p>
        </motion.div>
    </div>
  )
}

export default About