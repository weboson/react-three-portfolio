import { BrowserRouter } from "react-router-dom";
// Components
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
//! если много canvas или webgl, то на телефоне (из-за оптимизации видеопамяти) некоторые модели не будут показаны, только белый квдрат с грустным смайликом
// поэтому я буду убирать шарики (tech.jsx=>bakk.jsx) в мобильных устройствах используя "react-device-detect"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About />
        <Experience/>
        {isBrowser && <Tech/>}
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
