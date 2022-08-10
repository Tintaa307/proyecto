import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./register.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Username Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Password Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
})

const URI = "http://localhost:8000/usuarios/"

/*const EmailInput = (props) => {
  return <input className="input" {...props} type="text" />
}*/

const Register = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const emailRef = useRef(null)
  //const expReg = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const navigate = useNavigate()

  const saveUser = async (values) => {
    await axios.post(URI, {
      nombre: values.username,
      email: values.email,
      contrasenia: values.password,
    })
    navigate("/")
  }

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
              username: "",
              password: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              saveUser(values)
              console.log(values)
            }}
          >
            {({ errors, touched, handleChange, values }) => (
              <Form autoComplete="off">
                <h2 className="title">REGISTRARSE</h2>
                <div className="input-div one ">
                  <div className="i">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="div">
                    <h5>E-mail</h5>
                    <Field
                      name={"email"}
                      type="email"
                      innerRef={emailRef}
                      onClick={() => setFocused(emailRef)}
                      onBlur={() => setFocused(null)}
                      //as={EmailInput}
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-email">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-div one ">
                  <div className="i">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="div">
                    <h5>Username</h5>
                    <Field
                      name={"username"}
                      type="text"
                      className="input"
                      innerRef={usernameRef}
                      onClick={() => setFocused(usernameRef)}
                      onBlur={() => setFocused(null)}
                      value={values.username}
                      onChange={handleChange}
                    />
                    {errors.username && touched.username ? (
                      <div className="error-user">{errors.username}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="div">
                    <h5>Password</h5>
                    <Field
                      name={"password"}
                      type="password"
                      className="input"
                      innerRef={passwordRef}
                      onClick={() => setFocused(passwordRef)}
                      onBlur={() => setFocused(null)}
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && touched.password ? (
                      <div className="error-password">{errors.password}</div>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className="boton-neon">
                  REGISTRARSE
                </button>
                <div className="container-already">
                  <h5>
                    ¿Ya tienes una cuenta?{" "}
                    <Link to={"/login"}>Inicar sesión.</Link>
                  </h5>
                </div>
              </Form>
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
  )
}

export default Register
