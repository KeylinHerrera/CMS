/** Imports Frameworks. */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar Menu Module.
 * Creates a menu for the app navegation.
 * @returns Nav
 */
const SidebarMenuContainer = () => (
  <div className="">
    <h1 className="">CMS</h1>
    <nav className="">
      <ul className="">
        <li><NavLink className="nav__item" to='/Page'>Single Page</NavLink></li>
        <li><NavLink className="nav__item" to='/Content'>Content</NavLink></li>
        <li><NavLink className="nav__item" to='/Site'>Visit Site</NavLink></li>
      </ul>
    </nav>
  </div>
);

/** Exports the module. */
export default SidebarMenuContainer;
