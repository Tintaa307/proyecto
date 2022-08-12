import React from "react"
import "./rutinas.css"

const Rutinas = () => {
  return (
    <body>
      <div className="container-rutinas">
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icons">
                <i class="ri-run-line"></i>
              </div>
              <h3>Basic</h3>
              <h4>
                <sup>$</sup>25
              </h4>
              <ul>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
              </ul>
              <a href="#">Order now</a>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icons">
                <i class="ri-heart-pulse-fill"></i>
              </div>
              <h3>Basic</h3>
              <h4>
                <sup>$</sup>25
              </h4>
              <ul>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
              </ul>
              <a href="#">Order now</a>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icons">
                <i class="fa-light fa-dumbbell"></i>
              </div>
              <h3>Basic</h3>
              <h4>
                <sup>$</sup>25
              </h4>
              <ul>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
                <li>10 GB SPACE</li>
              </ul>
              <a href="#">Order now</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Rutinas
