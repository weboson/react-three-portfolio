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
  const handleChange = (e) => { };

  // обработчик формы:
  const handleSubmit = (e) => { };

  return (
    //! форма
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)} // движение слево на право
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
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
            <span className='text-white font-medium mb-4'>Your Email</span>
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
            <span className='text-white font-medium mb-4'>Your Message</span>
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
            {loading ? 'Sending...' : 'Send'}
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