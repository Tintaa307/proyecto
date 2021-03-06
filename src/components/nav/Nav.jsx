import { useState } from "react"
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

const Nav = () => {
  const [isOpen, setIsOpen] = useState("")

  const handleOpen = () => {
    setIsOpen(isOpen === "" ? "open" : "")
  }

  const handleClose = () => {
    setIsOpen("")
  }

  return (
    <header className="header-container">
      <nav className="container-nav">
        <ul className="list-nav">
          {links.map(({ name, href }, index) => {
            return (
              <motion.li
                initial={{ y: -240 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
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
