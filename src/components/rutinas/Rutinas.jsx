import React from "react"
import "./rutinas.css"
import { Link } from "react-router-dom"

const Rutinas = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icon">
                <i class="ri-run-line" aria-hidden="true"></i>
              </div>
              <h3>Basic</h3>
              <h4>
                <sup>$</sup>25
              </h4>
              <ul>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>10 GB Space
                </li>
              </ul>
              <a href="#">Order Now</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icon">
                <i class="ri-run-line" aria-hidden="true"></i>
              </div>
              <h3>Cardio</h3>
              <h4>
                <sup>$</sup>40
              </h4>
              <ul>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>20 GB Space
                </li>
              </ul>
              <a href="#">Order Now</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <div className="icon">
                <i class="ri-run-line" aria-hidden="true"></i>
              </div>
              <h3>Pro</h3>
              <h4>
                <sup>$</sup>65
              </h4>
              <ul>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
                <li>
                  <i class="ri-check-line" aria-hidden="true"></i>60 GB Space
                </li>
              </ul>
              <a href="#">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-rutinas">
        <div className="btn-rutina">
          <Link to={"/me/rutinas"} className="link-rutines">
            Mis Rutinas
          </Link>
        </div>
        <div className="btn-rutina">
          <Link to={"/create/rutine"} className="link-create">
            Crear Rutina
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Rutinas
