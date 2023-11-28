import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Gallery } from "./components"


const App = () => {

  // make the cursor follow the mouse
  const cursor = document.getElementById("cursor")
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  })

  // remove cursor when mouse leaves the site
  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none"
  })

  // reshow when mouse enters
  document.addEventListener("mouseenter", () => {
    cursor.style.display = "block"
  })

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Gallery />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div id="cursor" />
      </div>
    </BrowserRouter>
  )
}

export default App
