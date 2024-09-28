import React from "react";

// готовый компонент с стилизацией под новости, тексты и т.д., при прокрутки анимируется.
// VerticalTimeline - вертикальная линия, VerticalTimeLineElement - вертикальный блок
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// библиотека анимаций, например при скролле блок растет в размерах
// анимация какая-то, так сказал автор
import "react-vertical-timeline-component/style.min.css";
// стили
import { styles } from "../styles";
// данные (title, icon, date...) для контента раздела
import { experiences } from "../constants";
// обертка (href, стили, анимация наезда из пустоты)
import { SectionWrapper } from "../hoc";
// стили в виде JS-функций, возвращающих объекты со стилями - например: подсвечивание текста
import { textVariant } from "../utils/motion";
// стили в виде JS-функций, возвращающих объекты со стилями -  для подсвечивания текста
import { staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            url={experience.url}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-while text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <span>
          link:{" "}
          <a target="_blank" class="underline" href={experience.link}>
            {experience.name}
          </a>
        </span>
        <br />
        <span>
          Repo:{" "}
          <a target="_blank" class="underline" href={experience.repo}>
            GitHub
          </a>
        </span>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
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
  );
};

const Experience = () => {
  return (
    <>
      {/* якорь-ссылка для меню */}
      <span className="hash-span" id={'work'}>
        &nbsp;
      </span>

      <motion.section
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        {/* Title */}
        <motion.div
          variants={staggerContainer()}
          // исходная позиция (карточки спрятаны)
          initial="hidden"
          // в поле зрения (карточка появляются)
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          // стили отступа от краёв
          className={`max-w-7xl mx-auto relative`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Чему я научился</p>
            <h2 className={styles.sectionHeadText}>Мой опыт.</h2>
          </motion.div>
        </motion.div>

        {/* content */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
