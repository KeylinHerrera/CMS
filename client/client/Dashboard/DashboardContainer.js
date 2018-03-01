/** Imports Frameworks. */
import React from 'react';

/** Imports Modules. */
import SidebarMenuContainer from '../SidebarMenu/SidebarMenuContainer';

/** Dashboard Module. */
const DashboardContainer = () => (
  <div className="dashboard-container flex-container">
    <div className="sidebar-container section--small">
      <SidebarMenuContainer />
    </div>
    <div className="home-container section--lg">
      <h2 >Hello</h2>
      <h3>Welcome to CMS App</h3>
    </div>
  </div>
);

/** Exports the module. */
export default DashboardContainer;
