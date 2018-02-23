// Imports Frameworks
import React from 'react';

// Imports Modules
import SidebarMenuContainer from '../SidebarMenu/SidebarMenuContainer';

const DashboardContainer = () => (
  <div className="home-container">
    <div className="row">
      <div className="col-3 col-md-3">
        <SidebarMenuContainer />
      </div>
      <div className="col-7 col-md-7 offset-md-4">
        <div className="aligner-home">
          <div className="aligner-item">
            <h2 >Hello</h2>
            <h3>Welcome to CMS App</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardContainer;
