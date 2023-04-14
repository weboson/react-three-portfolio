import React from 'react'
// библиотека анимаций
import { motion } from "framer-motion";
// стили
import { styles } from '../styles';
// компонент 
import { ComputersCanvas } from './canvas';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* фиолетовый кружок */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          {/* линия от кружочка | violet-gradient - это из index.css*/}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        {/* заголовок - надпись */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Rishat</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' /> interfaces and web applications.
          </p>
        </div>
      </div>
{/*//! 3D desctop_pc */}
      <ComputersCanvas/>

{/*//! scroll */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/*//! анимация шарика с помощью библитеки "framer-motion" */}
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5, // продолжительность
                repeat: Infinity,
                repeatType: 'loop'
              }}
              // бегающий шарик 
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero