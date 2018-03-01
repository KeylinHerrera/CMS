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
  <div className="">
    <h1 className="">CMS</h1>
    <nav className="">
      <ul className="">
        <li><NavLink className="nav__item" to='/Page'><i class="edit outline icon"></i>Single Page</NavLink></li>
        <li><NavLink className="nav__item" to='/Site'><i class="eye icon"></i>Visit Site</NavLink></li>
      </ul>
    </nav>
  </div>
);

/** Exports the module. */
export default SidebarMenuContainer;
