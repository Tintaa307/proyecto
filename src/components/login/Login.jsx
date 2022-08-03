import React, { useEffect } from "react"
import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
  const inputs = document.querySelectorAll(".input")

  function add() {
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
  }

  function rem() {
    let parent = this.parentNode.parentNode
    if (this.value === "") {
      parent.classList.remove("focus")
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", add)
    input.addEventListener("blur", rem)
  })

  return (
    <div className="container-login">
      <div className="container-info-login">
        <div className="container">
          <div className="content">
            <form action="index.html">
              <h2 className="title">Bienvenido</h2>

              <div className="input-div one ">
                <div className="i">
                  <i className="fa fa-user"></i>
                </div>
                <div className="div">
                  <h5>Usuario</h5>
                  <input type="text" className="input" />
                </div>
              </div>

              <div className="input-div pass">
                <div className="i">
                  <i className="fa fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Contraseña</h5>
                  <input type="password" className="input" />
                </div>
              </div>
              <div className="forgot">
                <a href="#">¿Olvidó su Contraseña?</a>
              </div>
              <div className="boton-neon">Ingresar</div>
              <div className="container-createacc">
                <h5>
                  ¿No tienes cuenta? Create una{" "}
                  <Link className="link" to={"/register"}>
                    AQUÍ
                  </Link>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-back">
        <Link to={"/"} className="link">
          <i className="ri-arrow-left-line"></i>{" "}
        </Link>
      </div>
    </div>
  )
}

export default Login
