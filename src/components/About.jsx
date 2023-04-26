import React from 'react';

// библиотека анимации НАКЛОНА карточек
import { Tilt } from 'react-tilt'; // только {Tilt}, Tilt -> ошибка
// библиотека базовых анимаций (перемещение карточек)
import { motion } from 'framer-motion';
// стили в JS-объектах
import { styles } from '../styles';
// данные (текст) для заполнения карточек
import { services } from '../constants'; // index.js
// стили в виде JS-функций возвращающих объекты со стилями -  для подсвечивания текста
import { fadeIn, textVariant } from '../utils/motion';

// компонент обёртка, чтобы центрировать, ориентировать по id и не только, остальные разделы:
import SectionWrapper from "../hoc/SectionWrapper";


// компонент "карточки"
const ServiceCard = ({ index, title, icon }) => {
  return (
    // Tilt - библиотека анимации НАКЛОНА карточек
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        // fadeIn - исчезать(направление, тип: sping-пружина, задержка, продолжительность) */}
        variants={fadeIn("right", 'spring', 0.5 * index, 0.75)} // из utils/motion.js
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" // green-pink-gradient - из index.css
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    // <> или <React.Fragment> - это React-фрагмент, чтобы не писать лишних родительских блоков (div)
    <>
      <motion.div variants={textVariant()}> 
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* // fadeIn(direction, type, delay, duration) */}
      {/* // fadeIn(направление, тип, задержка, продолжительность) */}
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a beginner software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js.
        I'm a quick learner and collaborate closely with clients to create efficient,  scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>  

      {/* карточки */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}


//export default About
// В обёртке (файл SectionWrapper.jsx):
export default SectionWrapper(About, "about");