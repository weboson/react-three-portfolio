import React from "react";

// библиотека анимации НАКЛОНА карточек
import { Tilt } from "react-tilt"; // только {Tilt}, Tilt -> ошибка
// библиотека базовых анимаций (перемещение карточек)
import { motion } from "framer-motion";
// стили в JS-объектах
import { styles } from "../styles";
// данные (текст) для заполнения карточек
import { services } from "../constants"; // index.js
// стили в виде JS-функций возвращающих объекты со стилями -  для подсвечивания текста
import { fadeIn, textVariant } from "../utils/motion";

// компонент обёртка, чтобы центрировать, ориентировать по id и не только, остальные разделы:
import SectionWrapper from "../hoc/SectionWrapper";

// компонент "карточки"
const ServiceCard = ({ index, title, icon }) => {
  return (
    // Tilt - библиотека анимации НАКЛОНА карточек
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // fadeIn - исчезать(направление, тип: sping-пружина, задержка, продолжительность) */}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} // из utils/motion.js
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" // green-pink-gradient - из index.css
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    // <> или <React.Fragment> - это React-фрагмент, чтобы не писать лишних родительских блоков (div)
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Введение</p>
        <h2 className={styles.sectionHeadText}>Обзор.</h2>
      </motion.div>

      {/* // fadeIn(direction, type, delay, duration) */}
      {/* // fadeIn(направление, тип, задержка, продолжительность) */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] text-justify"
      >
        Я начинающий разработчик web-приложений, с опытом работы на языках
        TypeScript и JavaScript, специализируюсь на фреймворках: React, Node.js,
        Nest.js, Redux Toolkit и так далее. <br />
        Основным направлением, для себя считаю, "front-end", но тем не менее,
        разрабатывал и full-stack приложения, с использованием стека: Nest.js,
        Express.js, PostgreSQL, MongoDB и так далее. <br />
        Также имею опыт размещения web-приложений на VPS - серверах. <br />
        Верстал шаблоны на основе CMS: OpenCart, Joomla, MODX, Wordpress - и
        размещал их на хостингах. <br />
        P.S. Очень нравится познавать новые технологии, и конечно же сама
        разработка ПО. Считаю себя творческим человеком. Спасибо за внимание.
        <br />
        GitHub:{" "}
        <a className={"underline"} target="_blank" href="https://github.com/weboson">
          weboson
        </a>
      </motion.p>

      {/* карточки */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

//export default About
// В обёртке (файл SectionWrapper.jsx):
export default SectionWrapper(About, "about");
