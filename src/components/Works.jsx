// import React from 'react'
// библиотека для 3D карточки, с наклоном при наведении мыши
import { Tilt } from 'react-tilt'; //! только {Tilt}, Tilt -> ошибка
// библиотека анимаций, например при скролле блок растет в размерах
import { motion } from 'framer-motion';
// стили
import { styles } from '../styles';
// иконка GitHub
import { github } from '../assets';
// обертка (href, стили, анимация наезда из пустоты)
import { SectionWrapper } from '../hoc'
// данные (текст) для контента
import { projects } from '../constants';
// стили в виде JS-функций возвращающих объекты со стилями -  для подсвечивания текста
import { fadeIn, textVariant } from '../utils/motion';


// карточка
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
// Variants - можно использовать для анимации целых дочерних компонентов с помощью одной анимации. 
// анимация: перемещение карточек снизу верх, поочереди
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45, // степень поворота в сторону указателя мыши
          scale: 1, // степень увеличения в сторону указателя мыши
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* изображение (сайта)*/}
        <div className='relative w-full h-[230px]'>
          <img 
            // image, name - это из пропсов, а пропсы из Works "{...project}"
            src={image} 
            alt={name} 
            className='w-full h-full object-cover rounded-2xl'
          />
          {/* блок для gitHub icon - inset: 0 (верхнем правом углу ): это шорткат, задающий значение для свойств top, right, bottom и left, при absolute - подробнее: https://habr.com/ru/companies/first/articles/685054/ */}
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              {/* ссылка */}
              <div
                onClick={() => window.open(source_code_link, "_blank")} // открыть в новой вкладке
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                {/* изображение (github) */}
                <img 
                  src={github} // переменная github импортирована выше, из ../assets
                  alt="github"
                  className='w-1/2 h-1/2 object-contain' 
                />
              </div>
            </div>
        </div>
        
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* хэштеги */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

// раздел (заголовок, описание, итерация для создания списка карточек)
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          // fadeIn - исчезать(направление, тип: sping-пружина, задержка, продолжительность) */}
          variants={fadeIn('', '', 0.1, 1)} // из utils/motion.js
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');