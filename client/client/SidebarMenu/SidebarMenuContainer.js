/** Imports Frameworks. */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { i } from 'semantic-ui-react';

/**
 * Sidebar Menu Module.
 * Creates a menu for the app navegation.
 * @returns Nav
 */
const SidebarMenuContainer = () => (
  <div className="sidebar-section">
    <h1>CMS</h1>
    <nav className="sidebar__nav">
      <ul>
        <div>
          <i className="edit outline icon"></i>
          <li><NavLink className="nav__item" to='/Page'>Single Page</NavLink></li>
        </div>
        <div>
          <i className="eye icon"></i>
          <li><NavLink className="nav__item" to='/Site'>Visit Site</NavLink></li>
        </div>
        
      </ul>
    </nav>
  </div>
);

/** Exports the module. */
export default SidebarMenuContainer;
