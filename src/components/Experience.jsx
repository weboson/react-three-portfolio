import React from 'react'

// готовый компонент с стилизацией под новости, тексты и т.д., при прокрутки анимируется.
// VerticalTimeline - вертикальная линия, VerticalTimeLineElement - вертикальный блок
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// библиотека анимаций, например при скролле блок растет в размерах
import { motion } from 'framer-motion';
// анимация какая-то, так сказал автор
import 'react-vertical-timeline-component/style.min.css';
// стили
import { styles } from '../styles';
// данные (title, icon, date...) для контента раздела
import { experiences } from '../constants';
// обертка (href, стили, анимация наезда из пустоты)
import { SectionWrapper } from '../hoc';
// стили в виде JS-функций, возвращающих объекты со стилями - например: подсвечивание текста
import { textVariant } from '../utils/motion';


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        }
    >
      <div>
        <h3 className='text-while text-[24px] font-bold'>
          {experience.title}</h3>
        <p className='text-secondary text-[16px]' style={{margin: 0}}>
          {experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li 
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-winder"  
          >
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
  )

}



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
            ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");