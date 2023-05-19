import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({title,first,second,dropDown="dropDown",dropDownitem1="item-1",dropDownitem2="item-2",dropDownitem3="item-3"}) {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid" >
      <Link className="navbar-brand" to="/">
        {title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              {first}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {second}
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {dropDown}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  {dropDownitem1}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                {dropDownitem2}
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                {dropDownitem3}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
  
}
