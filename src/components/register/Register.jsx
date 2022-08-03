import React from "react"
import "./register.css"

const Register = () => {
  const inputs = document.querySelectorAll(".input")

  function add() {
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
  }

  function rem() {
    let parent = this.parentNode.parentNode
    if (this.value == "") {
      parent.classList.remove("focus")
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", add)
    input.addEventListener("blur", rem)
  })

  return (
    <div class="container">
      <div class="content">
        <form>
          <h2 class="title">REGISTRARSE</h2>

          <div class="input-div one ">
            <div class="i">
              <i class="fa fa-envelope"></i>
            </div>
            <div class="div">
              <h5>E-mail</h5>
              <input type="email" class="input" />
            </div>
          </div>
          <div class="input-div one ">
            <div class="i">
              <i class="fa fa-user"></i>
            </div>
            <div class="div">
              <h5>Username</h5>
              <input type="text" class="input" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fa fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input type="password" class="input" />
            </div>
          </div>

          <div class="boton-neon">REGISTRARSE</div>
          <div class="container-already">
            <h5>
              ¿Ya tienes una cuenta? <a href="#">Inicar sesión.</a>
            </h5>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
