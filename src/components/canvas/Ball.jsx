//! 3D ball
import React from 'react'
// Suspense (задержка) - это React-компонент, который позволяет ОТОБРАЖАТЬ ЗАПАСНОЙ ВАРИАНТ, 
// ПОКА его дочерние элементы НЕ ЗАКОНЧАТ ЗАГРУЗКУ.
//! Suspense даёт возможность компонентам «дождаться» чего-то перед рендером.
import { Suspense } from 'react';
// библиотека ускоряет 3D анимацию и позволяет объединить компоненты React с их jsx и синтаксис библиотеки “Threejs”
import { Canvas } from '@react-three/fiber';
// Это 3D-библиотека с различными функциями, помогающими рендерить 3D React Three Fiber
//! decal - это наклейка на 3D модель, png из src\assets\tech импортировано src\constants\index.js и export переменными 
// OrbitControls - возможность масштабирования и вращения камеры, 
// Preload - перед рендером выполняет полную загрузку 3D модели, чтобы анимация была плавной, без рывков
// useTexture - Удобный хук, использующий useLoader и TextureLoader.
import {
  Decal, 
  Float, 
  OrbitControls, 
  Preload, 
  useTexture
} from '@react-three/drei';
// наш компонент для индикатор загрузки 3D модели - использующий useProgress от '@react-three/drei'
// индикатор загрузки
import CanvasLoader from '../Loader';

const Ball = (props) => {
  // decal - наклейка на текстуру - пропсы из компонента снизу
  const [decal] = useTexture([props.imgUrl])

  // (всё должно быть, иначе -  ничего не видно)
  // ambientLight - окружающий свет
  // directionalLight - направленный свет
  // mesh - сетка 
  // castShadow - отбрасывать тень
  // icosahedronGeometry - математическая фигня (автор сам не знает)
  // meshStandardMaterial - чтобы покарсить 3D модель
  // polygonOffset - смещение (в доках не нашел) 
  // flatShading - плоское затенение (в доках не нашел) - чтобы тень была не круглая, а также УГЛОВАТАЯ, как и шары
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} /> 
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0,0,1]}
          // повернуть по горизонтали  (чтобы не было как в зеркале)
          rotation={[ 2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

// холст для модели: камера, свет и т.д.
const BallCanvas = ({ icon }) => {
  return (
    // пoхоже, как и в Computers.jsx
    <Canvas 
       frameloop='demand'
       dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        {/* если автовращение -> <OrbitControls autoRotate enableZoom={false} /> */}
        <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas