import styles from './style'
import { Navbar, Hero, Projects, About, Footer } from "./components"
import Marquee from './components/Marquee'
import { useState } from 'react'


const App = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const sectionIds = ['hm-hero','hm-about'];


  const scrollToNextSection = () => {
    const nextIndex = (activeSectionIndex + 1) % sectionIds.length;
    const nextSectionId = sectionIds[nextIndex];
    scrollToSection(nextSectionId);
    setActiveSectionIndex(nextIndex);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const isLastSection = activeSectionIndex === sectionIds.length - 1;

  


  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="bg-[#ffffff] flex-grow">
        <div className={`bg-[#ae1c1c]`}>
          <div className={``}>
            <h1><Marquee /></h1>
          </div>
        </div>

        <section id='hm-hero' className={` file:flex items-center justify-center h-screen ${styles.flexStart}`}>
            <Hero />
        </section>
        <section id='hm-about' className={`file:flex items-center justify-center h-screen ${styles.flexStart}`}>
            <About />
        </section>

      </div>
      <div className="fixed bottom-0 right-0 mr-24 lg:mr-40 md:mr-10">
        <div className="arrow-container animated fadeInDown" id='scroll-btn' onClick={scrollToNextSection}>
          <div className="arrow-2">
          {isLastSection ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
          </div>
          <div className="arrow-1 animated hinge infinite zoomIn"></div>
        </div>
      </div>

      <footer className={`bg-gray-600 ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex justify-center`}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App