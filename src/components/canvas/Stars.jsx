//! компонент "движующее Звездное небо"
// Suspense (ожидание) - это новый хук от React - индикатор загрузки: https://ru.reactjs.org/docs/react-api.html#reactsuspense
// useRef - это ссылка на элемент, чтобы им управлять
import { useState, useRef, Suspense } from 'react';
// Canvas, useFrame из библиотеки Theejs: ускоряет 3D анимацию и позволяет объединить компоненты React с их jsx и синтаксис библиотеки “Threejs”
import { Canvas, useFrame } from '@react-three/fiber';
// коллекция анимационных абстракций для react-three/fiber
import { Points, PointMaterial, Preload } from '@react-three/drei';
// математичекая утилита для рандомных чисел (положение точек): https://github.com/pmndrs/maath
// import всё как random
import * as random from 'maath/random/dist/maath-random.esm';


const Stars = (props) => {

  const ref = useRef();
  // сфера движущая и на нем текстура звездного неба
  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2})

  // вращение (rotation) 'элемента (ref)
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial // текстура (звезды на темном фоне) для движущейся сферы
          transparent // прозрачный
          color='#f272c8' 
          size={0.002} // размер звезд
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    // absolute и z-[-1] - чтобы блок расположился за Землей
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all/>
      </Canvas>
    </div>
  )
}

export default StarsCanvas;