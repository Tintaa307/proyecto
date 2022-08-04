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
    <div class="container-register">
      <div className="container-content">
        <div class="content">
          <form>
            <h2 class="title">REGISTRARSE</h2>

            <div class="input-div one ">
              <div class="i">
                <i class="fa fa-envelope"></i>
              </div>
              <div class="div">
                <h5>E-mail</h5>
                <input
                  type="email"
                  class="input"
                  ref={emailRef}
                  onClick={() => setFocused(emailRef)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>
            <div class="input-div one ">
              <div class="i">
                <i class="fa fa-user"></i>
              </div>
              <div class="div">
                <h5>Username</h5>
                <input
                  type="text"
                  class="input"
                  ref={usernameRef}
                  onClick={() => setFocused(usernameRef)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fa fa-lock"></i>
              </div>
              <div class="div">
                <h5>Password</h5>
                <input
                  type="password"
                  class="input"
                  ref={passwordRef}
                  onClick={() => setFocused(passwordRef)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div class="boton-neon">REGISTRARSE</div>
            <div class="container-already">
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
