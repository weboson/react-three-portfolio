//! Suspense (ожидание) - это новый хук от React - индикатор загрузки: https://ru.reactjs.org/docs/react-api.html#reactsuspense
import { Suspense, useEffect, useState } from 'react';
// Canvas из библиотеки Theejs: ускоряет 3D анимацию и позволяет объединить компоненты React с их jsx и синтаксис библиотеки “Threejs”
import { Canvas } from '@react-three/fiber';
// коллекция анимационных абстракций для react-three/fiber
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// наш компонент - индикатор загрузки
import CanvasLoader from '../Loader';
import { Mesh } from "three";

const Computers = ({ isMobile }) => {
  //! загрузчик gltf-моделей из библиотеки '@react-three/drei'
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    // сетка
    <mesh>
      {/* //! 3 света: */ }
      {/* //! 1-й сферичный с интенсивностью 0.15 */ }
      <hemisphereLight intensity={0.15} groundColor='black' />
      {/* //! 2-ой точечный с интенсивностью 1 */}
      <pointLight intensity={1} />
      {/* //! 3-й основной прожектор */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* //! сцена */}
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        //! позиция (ниже заголовка) 
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        //! камера смотрит чуть сверху 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  // для адаптации 3D модели под размеры экрана (адаптивность) 
  // передадим в пропсы <Computers isMobile={isMobile} /> и используем в позиции и размерах сцены  (<primitive />)
  const [ isMobile, setIsMobile ] = useState(false);

  //! для адаптации - определение экрана, и сравнения его с "max-width: 500"
  useEffect(() => {
    // метод .matchMedia проверяет соответствует ли текущий экран введенным нами аргументу
    // - возвращает объект со свойствов маркером .matches (true/false)
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // установить текущее значение .matches (true/false) 
    setIsMobile(mediaQuery.matches); //* при первом монтировании

    // обработчик для слушателя события "change" (изменять)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); //* при последующих изменениях экрана (change)
    }
    // слушатель события от "window.matchMedia() => mediaQuery" (вызывает обработчик при изменении свойств экрана)
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // удалить слушателя
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }


  }, []); // пустой массив (без зависимостей), т.е. функция запустится единожды, только при “монтировании” 

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
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

// export default Computers
export default ComputersCanvas;