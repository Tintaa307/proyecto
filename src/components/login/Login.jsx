import React, { useEffect, useRef, useState } from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import { Field, Formik, Form } from "formik"
import axios from "axios"

const URI = "http://localhost:8000/usuarios"

const Login = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
  const [user, setUser] = useState([])

  const [focused, setFocused] = useState(null)

  useEffect(() => {
    if (usernameRef.current.value === "" || passwordRef.current.value === "") {
      if (focused) focused.current.parentNode.parentNode.classList.add("focus")
    } else {
      usernameRef.current.parentNode.parentNode.classList.remove("focus")
      passwordRef.current.parentNode.parentNode.classList.remove("focus")
    }
  }, [focused])

  return (
    <div className="container-login">
      <div className="container-info-login">
        <div className="container">
          <div className="content">
            <form autoComplete="off">
              <h2 className="title">Bienvenido</h2>
              <div className="input-div one ">
                <div className="i">
                  <i className="fa fa-user"></i>
                </div>
                <div className="div">
                  <h5>Usuario</h5>
                  <input
                    name="nombre"
                    type="text"
                    className="input"
                    ref={usernameRef}
                    onClick={() => setFocused(usernameRef)}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div className="input-div pass">
                <div className="i">
                  <i className="fa fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Contraseña</h5>
                  <input
                    name="contrasenia"
                    type="password"
                    className="input"
                    ref={passwordRef}
                    onClick={() => setFocused(passwordRef)}
                    onBlur={() => setFocused(focused)}
                  />
                </div>
              </div>
              <div className="forgot">
                <a href="#">¿Olvidó su Contraseña?</a>
              </div>
              <button type="submit" className="boton-neon">
                Ingresar
              </button>
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
