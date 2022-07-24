import { useContext } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ThemeContext from "./context/ThemeContext"

function App() {
  const { color } = useContext(ThemeContext)
  return (
    <>
      <div color={color} className="container-all">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
