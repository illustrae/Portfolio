
import { motion } from "framer-motion";
import { me, react, python, java,
  flutter,
  tailwind, resume } from '../assets'




const Hero = () => {
  return (
    <>
    <section id='home' className={`flex md:flex-row flex-col  sm:flex lg:ml-0 sm:ml-[100px] sm:justify-center mt-20`}>
      <div className={`flex-1 flex-col md:ml-20 lg:ml-20 xl:px-0 sm:px-10 px-4`}>
        <div className='flex items-center justify-center md:justify-start'>
          <p className='text-[#CCA43B] -mb-8 md:-mb-24 lg:-mb-24 lg:mt-2 text-[18px]'>
            <span className='text-[#ae1c1c] text-[23px]'> Hello</span>, my name is Trae
          </p>
        </div>
        <div className="flex flex-col sm:flex-row ">
          <div className="flex flex-col font-poppins font-semibold sm:mt-[5px] sm:text-[30px] lg:text-[35px] text-black ss:leading-[100px] leading-[75px] "> <br className="hidden sm:block" /> {'  '}
            <div className="text-gradient font-poppins lg:mb-2 sm:mt-[-30px] flex justify-center">I am a Web & Mobile Dev </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.5, ease: 'easeIn', duration: 2.5, delay: 1.5 }} className='flex justify-center m-1 sm:ml-0'>
              <img src={react} className='w-[40px] m-2 -mt-3 bg-[#070064] rounded-full p-1' />
              <img src={python} className='w-[40px] m-2 -mt-3 bg-[#070064]  rounded-full p-1' />
              <img src={flutter} className='w-[40px] m-2 -mt-3 bg-[#070064]  rounded-full p-1' />
              <img src={java} className='w-[40px] m-2 -mt-3 bg-[#070064]  rounded-full p-1' />
              <img src={tailwind} className='w-[40px] m-2 -mt-3 bg-[#070064]  rounded-full p-1' />
            </motion.div>
            <a href={resume} download="Traes-Resume" target="_blank" rel="noreferrer" className='lg:flex w-[80px] h-[20px] justify-center self-center mt-5 hidden sm:block md:hidden ss:hidden '>
            <button className='lg:flex sm:hidden md:hidden ss:hidden bg-[#CCA43B] hover:bg-[#808f85] text-gray-800 text-[16px] h-[30px] font-bold py-1 px-2 rounded inline-flex items-center justify-center'> <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> <span>Resume </span></button>
            </a> 
          </div>
            <motion.img initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 80, restDelta: 0.006 } }} src={me} className='block m-auto rounded-full w-60 lg:w-80 sm:h-full sm:mt-100 md:ml-5' />
        </div>
      </div>
    </section>
    {/* <section className='flex justify-center mt-20 text-white'>
      <a href={resume} download="Traes-Resume" target="_blank" rel="noreferrer" className='flex w-[80px] h-[20px] sm:justify-center self-center sm:mb-[20px] mt-5 lg:hidden'>
              <button className='lg:flex bg-[#ae1c1c] hover:bg-gray-400 text-white text-[16px] h-[30px] font-bold py-1 px-2 rounded inline-flex self-center sm:mb-[20px] justify-center'> <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> <span>Resume </span></button>
            </a> 
    </section> */}
</>

    
  )
}

export default Hero