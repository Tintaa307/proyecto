import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

const Register = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const emailRef = useRef(null)

  const [focused, setFocused] = useState(null)

  useEffect(() => {
    console.log(focused)
    usernameRef.current.parentNode.parentNode.classList.remove("focus")
    passwordRef.current.parentNode.parentNode.classList.remove("focus")
    emailRef.current.parentNode.parentNode.classList.remove("focus")
    if (focused) focused.current.parentNode.parentNode.classList.add("focus")
  }, [focused])

  return (
    <div className="container-register">
      <div className="container-content">
        <div className="content">
          <form>
            <h2 className="title">REGISTRARSE</h2>

            <div className="input-div one ">
              <div className="i">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="div">
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="input"
                  ref={emailRef}
                  onClick={() => setFocused(emailRef)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>
            <div className="input-div one ">
              <div className="i">
                <i className="fa fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
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
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  ref={passwordRef}
                  onClick={() => setFocused(passwordRef)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div className="boton-neon">REGISTRARSE</div>
            <div className="container-already">
              <h5>
                ¿Ya tienes una cuenta? <Link to={"/login"}>Inicar sesión.</Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
      <div className="container-back-reg">
        <Link to={"/"} className="link">
          <i className="ri-arrow-left-line"></i>{" "}
        </Link>
      </div>
    </div>
  )
}

export default Register
