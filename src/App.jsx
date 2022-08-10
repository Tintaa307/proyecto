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

function App() {
  const { color } = useContext(ThemeContext)
  const [toggleAppear, setToggleAppear] = useState("appear")

  const handleAppear = () => {
    setToggleAppear(toggleAppear === "appear" ? "disappear" : "appear")
  }

  return (
    <>
      <div color={color} className="container-all">
        <BrowserRouter>
          <Nav toggleAppear={toggleAppear} />
          <Routes>
            <Route path="/" element={<Home handleAppear={handleAppear} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
