//! планета Земля
// Suspense (ожидание) - это новый хук от React - индикатор загрузки: https://ru.reactjs.org/docs/react-api.html#reactsuspense
import { Suspense } from 'react';
// Canvas из библиотеки Theejs: ускоряет 3D анимацию и позволяет объединить компоненты React с их jsx и синтаксис библиотеки “Threejs”
import { Canvas } from '@react-three/fiber';
// коллекция анимационных абстракций для react-three/fiber
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// наш компонент - индикатор загрузки
import CanvasLoader from '../Loader';

const Earth = () => {

  //! загрузчик gltf-3D-модели
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand' // рендер 60 кадров, когда окно активно, иначе... эконом аккумулятора и т.д
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      {/* лоадинг */}
      <Suspense fallback={<CanvasLoader />}>
        {/* орбита (вращение модели мышкой) */}
        <OrbitControls
          autoRotate // автоматическое вращение
          enableZoom={false} // без зума
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />

      </Suspense>
    </Canvas>
  )
};

export default EarthCanvas;