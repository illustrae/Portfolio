
import { motion } from "framer-motion";
import {
  react, python, java,
  flutter,
  tailwind,
} from '../assets'




const Hero = () => {
  return (
    <>
      <section id='home' className={`flex md:flex-row flex-col  sm:flex lg:ml-0 sm:ml-[100px] sm:justify-center mt-64`}>

        <div className={`flex-1 flex-col xl:px-0 sm:px-10 px-4`}>

          <div className='flex justify-center '>
            <p className='text-[#c0c0c0] text-[30px] font-semibold'>
              Hi, I am  <span className='text-gradient'> Trae Hughes </span>
            </p>
          </div>

          <div className="flex flex-col font-poppins font-semibold sm:text-[30px] lg:text-[16px] text-[#c0c0c0] ss:leading-normal">
            <div className="flex justify-center font-poppins">
              <div className="max-w-md">
                <p className="mt-2 text-center">
                  As a versatile<span className='mx-1 text-[#24a9c0]'> Full Stack Developer,</span> I merge creativity with code to create an engaging digital experience.
                </p>
              </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.5, ease: 'easeIn', duration: 2.5, delay: 1.0 }} className='flex justify-center m-1 sm:ml-0'>
              <img src={react} className='w-[40px] m-2 mt-4 bg-[#24a9c0] rounded-full p-1' />
              <img src={python} className='w-[40px] m-2 mt-4 bg-[#24a9c0]  rounded-full p-1' />
              <img src={flutter} className='w-[40px] m-2 mt-4 bg-[#24a9c0]  rounded-full p-1' />
              <img src={java} className='w-[40px] m-2 mt-4 bg-[#24a9c0]  rounded-full p-1' />
              <img src={tailwind} className='w-[40px] m-2 mt-4 bg-[#24a9c0]  rounded-full p-1' />
            </motion.div>
          </div>
          
        </div>

      </section>
    </>
  )
}

export default Hero