import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "./nav.css"
import ButtonConfig from "./ButtonConfig"
import Settings from "../settings/Settings"

const links = [
  {
    name: "DIETAS",
    href: "#diet",
  },
  {
    name: "RUTINAS",
    href: "#Rutines",
  },
  {
    name: "CONTACTO",
    href: "#Contact",
  },
]

const Nav = ({ path }) => {
  const [isOpen, setIsOpen] = useState("")

  console.log(path)

  const handleOpen = () => {
    setIsOpen(isOpen === "" ? "open" : "")
  }

  const handleClose = () => {
    setIsOpen("")
  }

  return (
    <header className="header-container">
      <nav className={["container-nav", path].join(" ")}>
        <ul className="list-nav">
          {links.map(({ name, href }, index) => {
            return (
              <motion.li
                initial={{ y: -240 }}
                animate={{ y: 0 }}
                whileHover={{ translateY: "-5px" }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.01,
                }}
                className="item-list"
                key={index}
              >
                <motion.a className="link" href={href}>
                  {name}
                </motion.a>
              </motion.li>
            )
          })}
        </ul>
      </nav>
      <ButtonConfig
        isOpen={isOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <Settings isOpen={isOpen} />
    </header>
  )
}

export default Nav
