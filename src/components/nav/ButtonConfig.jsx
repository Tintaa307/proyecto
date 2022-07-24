import { useState } from "react"
import "./nav.css"

const ButtonConfig = ({ isOpen, handleClose, handleOpen }) => {
  return (
    <div className="container-icons-settings">
      <div className={["container-paleta", isOpen].join(" ")}>
        <i onClick={handleOpen} class="ri-settings-5-line"></i>
      </div>
      <div className={["container-arrow-back", isOpen].join(" ")}>
        <i onClick={handleClose} class="ri-arrow-left-line"></i>
      </div>
    </div>
  )
}

export default ButtonConfig
