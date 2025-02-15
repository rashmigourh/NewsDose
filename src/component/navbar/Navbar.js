import React from 'react'
import {
  Link
} from "react-router-dom";

const Navbar=()=> {

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-primary bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">Navbar</Link>
    <button className="navbar-toggler border border-white" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/aboutUs">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/Category" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/general">General</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
          </ul>
        </li>

         </ul>
    </div>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success text-white border-white" type="submit">Search</button>
      </form>
  </div>
</nav>
      </div>
    )
  }

export default Navbar
