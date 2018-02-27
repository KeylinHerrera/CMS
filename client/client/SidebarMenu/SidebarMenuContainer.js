/** Imports Frameworks. */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar Menu Module.
 * Creates a menu for the app navegation.
 * @returns Nav
 */
const SidebarMenuContainer = () => (
  <div className="container">
    <div className="row">
      <header className="lateral-menu aligner">
        <div className="aligner-item">
          <h1 className="border-bottom-dot">CMS</h1>
          <nav className="header__nav">
            <ul className="">
              <li><NavLink className="nav__item" to='/Page'>Single Page</NavLink></li>
              <li><NavLink className="nav__item" to='/Content'>Content</NavLink></li>
              <li><NavLink className="nav__item" to='/Media'>Media</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
);

/** Exports the module. */
export default SidebarMenuContainer;
