import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./register.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const Register = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const emailRef = useRef(null)
  const expReg = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const navigate = useNavigate()

  const [focused, setFocused] = useState(null)

  useEffect(() => {
    if (
      usernameRef.current.value === "" ||
      passwordRef.current.value === "" ||
      emailRef.current.value === ""
    ) {
      if (focused) focused.current.parentNode.parentNode.classList.add("focus")
    } else {
      usernameRef.current.parentNode.parentNode.classList.remove("focus")
      passwordRef.current.parentNode.parentNode.classList.remove("focus")
      emailRef.current.parentNode.parentNode.classList.remove("focus")
    }
  }, [focused])

  return (
    <div className="container-register">
      <div className="container-content">
        <div className="content">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values)
            }}
          >
            {({ errors, touched }) => (
              <form>
                <h2 className="title">REGISTRARSE</h2>

                <div className="input-div one ">
                  <div className="i">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="div">
                    <h5>E-mail</h5>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      ref={emailRef}
                      onClick={() => setFocused(emailRef)}
                      onBlur={() => setFocused(null)}
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-div one ">
                  <div className="i">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="div">
                    <h5>Username</h5>
                    <input
                      name="username"
                      type="text"
                      className="input"
                      ref={usernameRef}
                      onClick={() => setFocused(usernameRef)}
                      onBlur={() => setFocused(focused)}
                    />
                    {errors.username && touched.username ? (
                      <div>{errors.username}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="div">
                    <h5>Password</h5>
                    <input
                      name="password"
                      type="password"
                      className="input"
                      ref={passwordRef}
                      onClick={() => setFocused(passwordRef)}
                      onBlur={() => setFocused(null)}
                    />
                    {errors.pasword && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                  </div>
                </div>

                <div className="boton-neon">REGISTRARSE</div>
                <div className="container-already">
                  <h5>
                    ¿Ya tienes una cuenta?{" "}
                    <Link to={"/login"}>Inicar sesión.</Link>
                  </h5>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="container-back-reg">
        <Link to={"/"} className="link">
          <i className="ri-arrow-left-line"></i>{" "}
        </Link>
      </div>
    </div>

    /**/
  )
}

export default Register
