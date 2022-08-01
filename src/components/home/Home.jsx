import React, { useState, useEffect, useContext } from "react"
import "./home.css"
import Imagen from "../../assets/img-home.png"
import { motion } from "framer-motion"
import { useTypewriter } from "react-simple-typewriter"

const letters = [
  {
    letter: "T",
  },
  {
    letter: "A",
  },
  {
    letter: "V",
  },
  {
    letter: "R",
  },
  {
    letter: "O",
  },
  {
    letter: "S",
  },
  {
    letter: "S",
  },
]

const Home = () => {
  const { text, count } = useTypewriter({
    words: ["Fisico.", "Resistencia.", "Potencial.", "Energia.", "Salud."],
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
    loop: 0,
  })
  return (
    <main className="container-main">
      <div className="container-home-content">
        <div className="container-title">
          {letters.map(({ letter }, index) => {
            return (
              <motion.h1
                initial={{ opacity: 0, x: -240 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  bounce: 0.6,
                  delay: 0.5 * index,
                }}
                key={index}
              >
                {letter}
              </motion.h1>
            )
          })}
          <p>
            Tu mejor opcion para aprender a entrenar <br /> y desarrollar tu
            <span className="typing"> {text}</span>
          </p>
          <div className="container-buttons">
            <motion.button className="btn1">
              <span>Inicia Sesion</span> <div></div>
            </motion.button>
            <motion.button className="btn2">
              <div></div> <span>Comienza Ya!</span>
            </motion.button>
          </div>
        </div>
        <motion.div className="container-img"></motion.div>
      </div>
    </main>
  )
}

export default Home
