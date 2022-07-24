import { useState, useRef, useContext } from "react"
import "./settings.css"
import { motion } from "framer-motion"
import ThemeContext from "../../context/ThemeContext"
import Pagina from "../.././assets/pagina.png"

const Settings = ({ isOpen }) => {
  const [isSelected, setIsSelected] = useState("temas")
  const [sections, setSections] = useState("temas")
  const { color, changeColor } = useContext(ThemeContext)
  const checks = document.querySelectorAll(".ri-check-line")

  const handleSelected = (e, isSelected, sections) => {
    isSelected = e.target.id
    setIsSelected(isSelected)
    sections = e.target.id
    setSections(sections)
  }

  checks.forEach((check) => {
    check.classList.toggle("selected")
    if (check.id === color) {
      check.classList.add("selected")
    } else {
      check.classList.remove("selected")
    }
  })

  const saveData = () => {
    localStorage.setItem("color", color)
  }
  return (
    <motion.div className={["container-settings", isOpen].join(" ")}>
      <div className="settings-content">
        <div className="settings-title">
          <div onClick={handleSelected} id="temas" className="title">
            <h2 onClick={handleSelected} id="temas">
              Temas
            </h2>
          </div>
          <div onClick={handleSelected} id="accesibilidad" className="title">
            <h2 onClick={handleSelected} id="accesibilidad">
              Accesibilidad
            </h2>
          </div>
        </div>
        <div className="container-selector">
          <div className={["selector", isSelected].join(" ")}></div>
        </div>
        <div className={["container-temas", sections].join(" ")}>
          <h1>Elegi tu tema preferido</h1>
          <div className="container-content-temas">
            <div className="tema">
              <div onClick={changeColor} className="red">
                <i id="red" class="ri-check-line"></i>
              </div>
            </div>
            <div className="tema">
              <div onClick={changeColor} className="blue">
                <i id="blue" class="ri-check-line"></i>
              </div>
            </div>
            <div className="tema">
              <div onClick={changeColor} className="orange">
                <i id="orange" class="ri-check-line"></i>
              </div>
            </div>
            <div id="green" className="tema">
              <div onClick={changeColor} className="green">
                <i id="green" class="ri-check-line"></i>
              </div>
            </div>
            <div id="rosa" className="tema">
              <div onClick={changeColor} className="rosa">
                <i id="rosa" class="ri-check-line"></i>
              </div>
            </div>
          </div>
          <div className="container-preview">
            <img src={Pagina} alt="pagina" />
            <div className="container-items-preview">
              <div className="item-preview">
                <ul className="list-preview">
                  <li>DIETAS</li>
                  <li>RUTINAS</li>
                  <li>CONTACTO</li>
                </ul>
              </div>
              <div className="item-preview">
                <div className="button">
                  <motion.button className="btn1">
                    <span>Inicia Sesion</span> <div></div>
                  </motion.button>
                </div>
                <div className="button">
                  <motion.button className="btn2">
                    <div></div> <span>Comienza Ya!</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <div className="container-guardar">
            <button onClick={saveData} className="guardar">
              Guardar Tema
            </button>
          </div>
        </div>
        <div className={["container-accesibilidad", sections].join(" ")}>
          <h1>Navega con mas comodidad</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default Settings
