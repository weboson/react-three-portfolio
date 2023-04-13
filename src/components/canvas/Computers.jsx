//! Suspense (ожидание) - это новый хук от React - индикатор загрузки: https://ru.reactjs.org/docs/react-api.html#reactsuspense
import { Suspense, useEffect, useState } from 'react';
// Canvas из библиотеки Theejs: ускоряет 3D анимацию и позволяет объединить компоненты React с их jsx и синтаксис библиотеки “Threejs”
import { Canvas } from '@react-three/fiber';
// коллекция анимационных абстракций для react-three/fiber
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// наш компонент - индикатор загрузки
import CanvasLoader from '../Loader';
import { Mesh } from "three";

const Computers = () => {
  //! загрузчик gltf-моделей из библиотеки '@react-three/drei'
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    // сетка
    <mesh>
      {/* свет */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows 
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
        <Computers />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

// export default Computers
export default ComputersCanvas;