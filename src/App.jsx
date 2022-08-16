import { useContext, useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ThemeContext from "./context/ThemeContext"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Rutinas from "./components/rutinas/Rutinas"
import UserRutines from "./components/rutinas/UserRutines"
import CreateRutines from "./components/rutinas/CreateRutines"

function App() {
  const { color } = useContext(ThemeContext)
  const [path, setPath] = useState("")

  console.log(path)

  const handleAppear = () => {
    if (
      window.location.pathname === "/register" ||
      window.location.pathname === "/login"
    ) {
      setPath("disappear")
    } else {
      setPath("")
    }
  }

  return (
    <>
      <div color={color} className="container-all">
        <BrowserRouter>
          <Nav path={path} />
          <Routes>
            <Route path="/" element={<Home handleAppear={handleAppear} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/me/rutines" element={<UserRutines />} />
            <Route path="/create/rutine" element={<CreateRutines />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
