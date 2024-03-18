import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Gallery } from "./components"
import { useEffect, useState, useRef } from "react"
import "./App.css"
import { motion } from "framer-motion"

const App = () => {

  const cursorRef = useRef(null);

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      const offset = cursorVariant === "link" ? 30 : 16;
      cursorRef.current?.animate(
        [
          { transform: `translate(${e.clientX - offset}px, ${e.clientY - offset}px)` },
        ],
        {
          duration: 150,
          fill: "forwards",
        }
      );
    };

    const mouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.getAttribute('role') === 'button' || e.target.getAttribute('id') === 'cursorLink') {
        setCursorVariant("link");
      }
    };

    const mouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.getAttribute('role') === 'button' || e.target.getAttribute('id') === 'cursorLink') {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);
    window.addEventListener("mouseout", mouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
      window.removeEventListener("mouseout", mouseOut);
    };
  }, [cursorVariant]);

  const variants = {
    default: {
      height: 32,
      width: 32,
      borderRadius: "50%",
      border: "none",
      backgroundColor: "#804dee",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    link: {
      height: 60,
      width: 60,
      borderRadius: "50%",
      border: "2px solid #804dee",
      backgroundColor: "transparent",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div className="App">
      <motion.div
        className="cursor"
        ref={cursorRef}
        style={variants[cursorVariant]}
        animate={variants[cursorVariant]}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
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
          <Gallery onMouseEnter={() => setCursorVariant("link")} onMouseLeave={() => setCursorVariant("default")} />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App