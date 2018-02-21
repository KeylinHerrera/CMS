import React from 'react';
import { Link } from 'react-router-dom'

const SidebarMenuContainer = () => (
  <div className="container">
    <div className="row"> 
      <header className="col-12 col-md-3 nav-l lateral-menu aligner">
        <div className="aligner-item">
          <img className="logo" src="./img/logo.png" alt="logo" /> 
          <h1 className="border-bottom-dot">CMS</h1>
          <nav className="header__nav">
            <ul>
              <li><Link className="nav__item" to='/Home'>Page</Link></li>
              <li><Link className="nav__item" to='/Employees'>Media</Link></li>
              <li><Link className="nav__item" to='/Departments'>Header</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
);

export default SidebarMenuContainer ;