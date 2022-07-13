import * as React from "react"
import { motion } from "framer-motion"
import "./nav.css"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const menuParts = [
  {
    name: "Inicio",
    href: "#Home",
  },
  {
    name: "Sobre nostros",
    href: "#About",
  },
  {
    name: "Rutinas",
    href: "#Rutinas",
  },
  {
    name: "#Dietas",
    href: "#Dietas",
  },
  {
    name: "Contactanos",
    href: "#Contact",
  },
]

const icons = [
  {
    name: "ri-home-4-line",
  },
  {
    name: "ri-user-heart-fill",
  },
  {
    name: "ri-file-list-line",
  },
  {
    name: "ri-health-book-line",
  },
  {
    name: "ri-mail-send-line",
  },
]

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder">
        <i className={icons[i].name}></i>
      </div>
      <div className="text-placeholder">
        <a href={menuParts[i].href}>{menuParts[i].name}</a>
      </div>
    </motion.li>
  )
}
