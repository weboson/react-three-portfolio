// компонент-обертка (высшего порядка, чем About и т.д.)
import React from 'react';

// библиотека базовых анимаций (перемещение карточек)
import { motion } from 'framer-motion';
// стили в JS-объектах
import { styles } from '../styles';
// контейнер обертка
// стили в виде JS-функций, возвращающих объекты со стилями -  для подсвечивания текста
import { staggerContainer } from '../utils/motion';

// компонент возвращает функцию, 2 вида написания:  
// “f() => {return()}” или “f() => ”
const SectionWrapper = (Component, idName) => 
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                // исходная позиция (карточки спрятаны)
                initial="hidden"
                // в поле зрения (карточка появляются)
                whileInView="show" 
                // once: true - Если true, то после того, как элемент войдет в область просмотра, он останется в состоянии whileInView="show": https://www.framer.com/motion/scroll-animations/##viewport-options
                // То есть, если once: false - то анимация будет проигрываться каждый раз при скролле
                // А если, once: true - то анимация сработает 1 раз при первом скролле
                // amount: 0.25 - 0.25 секунды 
                viewport={{ once: true, amount: 0.25 }}
                // стили отступа от краёв
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                    <span className='hash-span' id={idName}>
                        &nbsp;
                    </span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
