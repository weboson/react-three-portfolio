//! компонент Contact с формой отправки email сообщения и 3D Землей  
// useRef - это ссылка на элемент, чтобы им управлять
import { useState, useRef } from 'react';
// библиотека для анимаций блока при скролле
import { motion } from 'framer-motion';
// JS-библиотека для отправки почты с формы
import emailjs from '@emailjs/browser';
// стили
import { styles } from '../styles';
// компонент Земля
import { EarthCanvas } from './canvas';
// обертка (href, стили, анимация наезда из пустоты)
import { SectionWrapper } from '../hoc';
// стили в виде JS-функций, возвращающих объекты со стилями - например: слева выезжает блок
// const slideIn = (direction, type, delay, duration)
// const slideIn = (направление, type, замедление, продолжительность)
import { slideIn } from '../utils/motion';

const Contact = () => {
  // якорь на элемент
  const formRef = useRef();

  // состояние для формы
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // лоудинг во время отпавки Email - сообщения
  const [loading, setLoading] = useState(false);

  // обработчик формы: 
  const handleChange = (e) => { 
    console.log(e.target) // содержит HTML-элемент <input type="text" name="name" placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outliner-none border-none font-medium" value="текст ">
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  };

  // обработчик формы:
  const handleSubmit = (e) => { 
    e.preventDefault(); // отключить рекацию по-умолчанию: обновление окна при нажатии на "Отправить"
    setLoading(true); // лоадинг

    //! библиотека активна я зарегистрировался в https://www.emailjs.com/ (данные аккаунта в доке "Деплой - Pet проекта 2023-2024")
    emailjs.send(
      'service_ipxcc8o',
      'template_7piz0tq',
      {
        from_name: form.name,
        to_name: 'Rishat',
        from_email: form.email,
        to_email: 'virisound@gmail.com',
        message: form.message,
      },
      'ZM3z8_n66UUBgdFyN'
    )
    .then(() => {
      //* при успешной отпавки Email
      setLoading(false);
      alert('Спасибо. Я свяжусь с вами как можно скорее.');

      // сброс строк
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 
    //* при ошибке
    (error) => {
      setLoading(false);

      console.log(error);
      alert('Ошибка. Моя почта: virisound@gmail.com. Пометка +++++WEBOSON++++++');
    })
  };

  return (
    //! форма
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)} // движение слево на право
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Напишите мне</p>
        <h3 className={styles.sectionHeadText}>Связь</h3>
        <span className={styles.sectionSubText}>VK: <a href="https://vk.com/id444277175">Rishat Hasselhoff</a></span>

        <form
          // action="mailto:virisound@gmail.com" method="post"
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ваше имя</span>
            <input
              type="text"
              name='name'
              value={form.name} // из состояния
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outliner-none border-none font-medium'
            />
          </label>
        </form>


        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ваш Email</span>
            <input
              type="email"
              name='email'
              value={form.email} // из состояния
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outliner-none border-none font-medium'
            />
          </label>
        </form>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Сообщение:</span>
            <textarea
              rows='7'
              name='message'
              value={form.message} // из состояния
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outliner-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Отправление...' : 'Отправить'}
          </button>
        </form>

      </motion.div>

      {/* //! звезды + земля */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)} // движение справа налево
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* //! земля */}
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact'); 