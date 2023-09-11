import styles from './style'
import {Navbar, Hero, Projects, About} from "./components"


const App = () => {

const date = <span> {new Date().getFullYear()} &copy; All Rights Reserved</span>
  

  return (
    <div className='bg-black w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#ae1c1c]`}>
        <div className={`${styles.boxWidth}`}>
          <h1><Navbar /></h1>
        </div>
      </div>

      <section id='home' className={`bg-black file:flex items-center justify-center h-screen ${styles.flexStart}`}>
        <div className={``}>
          <Hero />
        </div>
      </section>

      <section id='home' className={`bg-black file:flex items-center justify-center h-screen ${styles.flexStart}`}>
        <div className={`mt-30`}>
          <About />
        </div>
      </section>
      <section id='home' className={`bg-black h-full w-full mb-20`}>
          <Projects />
      </section>
      
      
      <footer className={`bg-gray-600 ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex justify-center`}>
        {date} 
        </div>
      </footer>

    </div>
  )
}

export default App