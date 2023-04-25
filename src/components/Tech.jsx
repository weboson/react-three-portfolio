//! раздел Tech
import React from 'react'
// компонент шарика (ball)
import { BallCanvas } from './canvas';
// обертка для стилей, анимаций...
import { SectionWrapper } from '../hoc';
// контент (текст) для шаров
import { technologies } from '../constants';


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

//!
export default SectionWrapper(Tech, '');