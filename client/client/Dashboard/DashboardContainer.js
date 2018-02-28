/** Imports Frameworks. */
import React from 'react';

/** Imports Modules. */
import SidebarMenuContainer from '../SidebarMenu/SidebarMenuContainer';

/** Dashboard Module. */
const DashboardContainer = () => (
  <div className="flex-container">
    <div  className="sidenav">
      <SidebarMenuContainer />
    </div>
    <div className="dashboard">
      <h2 >Hello</h2>
      <h3>Welcome to CMS App</h3>
    </div>
  </div>
);

/** Exports the module. */
export default DashboardContainer;
