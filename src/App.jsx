import styles from './style'
import { Navbar, Hero, Projects, About, Footer } from "./components"
import { useState } from 'react'


const App = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const sectionIds = ['hm-hero','hm-projects', 'hm-about'];


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
      <div className="bg-[url('./assets/bgCode.jpg')] bg-center bg-no-repeat flex-grow" style={{ backgroundSize: 'cover', minHeight: '200px' }} >
        <div className={`bg-[#05030cc9]`}>
          <Navbar />
        </div>

        <section id='hm-hero' className={` bg-[#05030cc9] file:flex justify-center h-screen ${styles.flexStart}`}>
            <Hero />
        </section>

        <section id='hm-projects' className={`file:flex bg-[#030411] sm:items-center sm:justify-center sm:h-screen ${styles.flexStart}`}>
            <Projects />
        </section>

        <section id='hm-about' className={`file:flex bg-[#05030cc9] sm:items-center sm:justify-center sm:h-screen ${styles.flexStart}`}>
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

      <footer className={`bg-[#030411] ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex justify-center`}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App