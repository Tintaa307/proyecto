import React from "react"
import "./login.css"

const Login = () => {
  return (
    <div className="container-login">
      <div className="container-info-login">
        <div className="container">
          <div className="content">
            <form action="index.html">
              <img src="img/hombre.svg" alt="" />
              <h2 className="title">Welcome</h2>

              <div className="input-div one ">
                <div className="i">
                  <i className="fa fa-user"></i>
                </div>
                <div className="div">
                  <h5>Username</h5>
                  <input type="text" class="input" />
                </div>
              </div>

              <div className="input-div pass">
                <div className="i">
                  <i class="fa fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <input type="password" className="input" />
                </div>
              </div>
              <a href="#">Forgot Password?</a>
              <div className="boton-neon">Login</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
