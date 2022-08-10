import React from "react"
import "./rutinas.css"

const Rutinas = () => {
  return (
    <div className="container-rutinas">
      <div className="container-title">
        <h1>TITULO</h1>
        <h3>AQUI PODRAS ELEGIR TU RUTINA FAVORITA</h3>
      </div>
      <div className="container-grid">
        <div className="container-box">
          <h1>LOREM</h1>
        </div>
        <div className="container-box">
          <h1>LOREM</h1>
        </div>
        <div className="container-box">
          <h1>LOREM</h1>
        </div>
        <div className="container-box">
          <h1>LOREM</h1>
        </div>
      </div>
      <div className="container-buttons">
        <div className="container-favs">
          <h1>
            MIS RUTINAS <i class="ri-heart-fill"></i>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Rutinas
