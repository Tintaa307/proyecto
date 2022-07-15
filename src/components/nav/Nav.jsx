import * as React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import "./nav.css"

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
  return (
    <header className="header-container">
      <nav className="container-nav">
        <ul className="list-nav">
          {links.map(({ name, href }, index) => {
            return (
              <motion.li
                initial={{ x: -240 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.6,
                  delay: index * 0.1,
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
        <div className="container-bar">
          <i class="ri-menu-fill"></i>
        </div>
      </nav>
    </header>
  )
}

export default Nav
