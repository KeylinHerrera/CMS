/** Imports Frameworks. */
import React from 'react';

/** Imports Modules. */
import SidebarMenuContainer from '../SidebarMenu/SidebarMenuContainer';

/** Dashboard Module. */
const DashboardContainer = () => (
  <div className="section-container">
    <div>
      <SidebarMenuContainer />
    </div>
    <div>
      <div>
        <div>
          <h2 >Hello</h2>
          <h3>Welcome to CMS App</h3>
        </div>
      </div>
    </div>
  </div>
);

/** Exports the module. */
export default DashboardContainer;
