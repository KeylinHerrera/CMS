// Imports Frameworks
import React from 'react';
import { NavLink } from 'react-router-dom';


const SidebarMenuContainer = () => (
  <div className="container">
    <div className="row">
      <header className="lateral-menu aligner">
        <div className="aligner-item">
          <h1 className="border-bottom-dot">CMS</h1>
          <nav className="header__nav">
            <ul className="">
              <li><NavLink className="nav__item" to='/Page'>Single Page</NavLink></li>
              {/* <li><NavLink className="nav__item" to='/Media'>Media</NavLink></li>
              <li><NavLink className="nav__item" to='/Header'>Header</NavLink></li> */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
);

export default SidebarMenuContainer;
