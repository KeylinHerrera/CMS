// Imports Frameworks
import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarMenuContainer = () => (
  <div className="container">
    <div className="row">
      <header className="col-12 col-md-3 nav-l lateral-menu aligner">
        <div className="aligner-item">
          <h1 className="border-bottom-dot">CMS</h1>
          <nav className="header__nav">
            <ul>
              <li><NavLink className="nav__item" to='/Page'>Single Page</NavLink></li>
              {/* <li><Link className="nav__item" to='/Media'>Media</Link></li>
              <li><Link className="nav__item" to='/Header'>Header</Link></li> */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
);

export default SidebarMenuContainer;
