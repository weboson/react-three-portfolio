// png файлы из папки (assets - ресурсы)
import {
  frontend,
  design,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  materialui,
  weboson,
  lets_try_js,
  ulbitv,
  webdev,
  annblok,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// данные ссылок (id, title...)
export const navLinks = [
  {
    id: "about",
    title: "Обо мне",
  },
  {
    id: "work",
    title: "Опыт",
  },
  {
    id: "contact",
    title: "Контакты",
  },
];

const services = [
  {
    title: "JavaScript TypeScript",
    icon: web,
  },
  {
    title: "React Developer",
    icon: frontend,
  },
  {
    title: "Front-end",
    icon: design,
  },
  {
    title: "Full-stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "materialui",
    icon: materialui,
  },
];

const experiences = [
  {
    title: "Full-stack: 'MedCalendar'",
    company_name: "Weboson",
    link: "https://weboson.github.io/MedCalendar-frontend/",
    name: "MedCalendar.ru",
    repo: "https://github.com/weboson/MedCalendar-frontend",
    icon: weboson,
    iconBg: "#000000",
    date: "Sep 23, 2024",
    points: [
      "Данный проект, дал мне понять, и упорядочить знания на практике образа fullstack приложения",
      "В качестве компилятор во всем проекте применил TypeScript",
      "На стороне сервера получил опыт в использовании удобной библиотеки Nest.js: создании сущностей, таблиц, экскизов данных и так далее",
      "Изучил взаимодействие frontend и fullstack используя программный интерфейс взаимодействия - REST API (RESTful)",
      "В качестве базы данных, использовал PostgreSQL (с ним и TypeORM), также изучил базовые SQL - запросы (инъекции)",
      "Для автоизации повторил разарботку на технолии JWT - токена, а 'Argon2' для шифрования",
      "На стороне клиента, получил расширенные знания и закрепил опыт в экосфере фронтенда 'React.js' используя сборщик 'Vite'",
      "Благодаря специфики приложения, в виде календаря - использовал библиотеку 'Moment.js'",
      "Активно 'юзал' систему управления глобального состояния 'Redux Toolkit'",
      "Познакомился с HTTP-методами запроса: Get, Post, Delete, Patch. Под управлением библиотеки 'Axios'",
      "Закрепил знания о асинхронных запросов (Promise) методов, инкапсулируя логику",
      "Закрепил знания в маршрутизации под управлением 'React Router'",
      "Стилизовал при помощи 'Styled-components' и 'React-icons'",
      "А также использовал в создании форм: Material UI + React-hook-form",
      "И в завершении выполнил Деплой на VPS-сервере",
      "и так далее.",
    ],
  },
  {
    title: "Fullstack-Nest-React",
    company_name: "Lets_try_JS",
    link: "https://weboson.ru/Fullstack-Nest-React/",
    name: "Fullstack-Nest-React",
    repo: "https://github.com/weboson/Fullstack-Nest-React",
    icon: lets_try_js,
    iconBg: "#fff",
    date: "Nov 9, 2023",
    points: [
      "Данный проект открыл мне принципы разработки Full-Stack приложений",
      "Данный проект был написан на TypeScript",
      "URL REST API для формирования запросов и откликов",
      "На стороне сервера, был использован фреймворк Nest.js: сущности, таблицы, экземпляры и т.д.",
      "В качестве базу данных был задействован PostgreSQL и TypeORM для работы с ним",
      "Познакомился с методами запроса: Get, Post, Delete. Под управлением библиотеки 'Axios'",
      "Для автоизации использовал технолию Jwt - токена, а также шифровальщик 'Argon2'",
      "На стороне клиента, закрепил и расширил понимание в среде фронтенда 'React.js' используя сборщик 'Vite'",
      "Изучил маршрутизацию на стороне клиента, используя библиотеку 'React Router'",
      "Активно 'юзал' систему управления глобального состояния 'Redux Toolkit'",
      "Научился делать асинхронные запросы (Promise) методов, инкапсулируя логику",
      "Стилизовал при помощи 'TailwindCSS' и 'React-icons'",
      "Для построения графика использовал библиотеку 'Recharts'",
      "Также, изучил на практике пагинацию",
      "И многое другое",
    ],
  },
  {
    title: "React App: react-ToDoList",
    company_name: "weboson",
    link: "https://github.com/weboson/react-ToDoList",
    name: "react-ToDoList",
    repo: "https://github.com/weboson/react-ToDoList",
    icon: weboson,
    iconBg: "#000000",
    date: "Aug 29, 2022",
    points: [
      "Получил опыт в React.js: состояние, hooks, классовые и функциональные компонеты и так далее",
      "Изучил маршрутизацию и link: react-router-dom",
      "Базовые команды Git>",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js learning №2",
    company_name: "WebDev",
    link: "https://weboson.github.io/Node-project-learn-2/",
    name: "Node-project-learn-2",
    repo: "https://github.com/weboson/Node-project-learn-2/tree/test",
    icon: webdev,
    iconBg: "#000000",
    date: "May 14, 2022",
    points: [
      "Благодаря данному проекту, я получил дополнительные знания платформы Node.js>",
      "Изучил основные методы и глобальные переменные: .process, Path",
      "Глобальные объекты такие как: __dirname, __filename, new Url etc.",
      "Импорт и экспорт модулей с помощью require() и  глобального объекта module.exports",
      "Файловая система в Node.sj: require('fs') и методы чтения, записи и удаления: .readFile(), .write(),  .unlink(), .rmdir(), .writeFileSync() etc.",
      "Модуль событий:  new EventEmitter(), .on(), .emit etc.",
      "Буфер и потоки: fs.createReadStream(), zlib.createGzip() etc.",
      "Сервер, роутинг: http.createServer(), createPath... ",
      "Работа с базой данных: MongoDB",
      "Node.js & Express.",
      ,
    ],
  },
  {
    title: "Node.js learning №1",
    company_name: "Ulbi TV",
    link: "https://github.com/weboson/Node-project-learn-1/",
    name: "Node-project-learn-1",
    repo: "https://github.com/weboson/Node-project-learn-1/",
    icon: ulbitv,
    iconBg: "#ffff",
    date: "Apr 29, 2022",
    points: [
      "Получил фундаментальные знания платформы Node.js",
      "Осуществил базовые функции: сервер, файловая система, события, стримы, глобальные объекты и т.д.",
      "Работа с базой данных: MongoDB",
      "Создание своего фреймворка, по типу Express.js.",
      "etc."
    ],
  },
  {
    title: "React App: animal",
    company_name: "Anna Blok",
    link: "https://github.com/weboson/animal",
    name: "animal",
    repo: "https://github.com/weboson/animal",
    icon: annblok,
    iconBg: "#ffff",
    date: "Apr 21, 2022",
    points: [
      "Изучил базовую вёрстку старницы на React.js",
      "Воспользовался базовыми командами webpack",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
