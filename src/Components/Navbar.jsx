import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Form</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="mx-2 navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/daily">Daily</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/quarterly">Quarterly</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/yearly">Yearly</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
