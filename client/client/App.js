/** Imports Frameworks. */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

/** Imports Modules. */
import SetUpContainer from './SetUp/SetUpContainer'
import DashboardContainer from './Dashboard/DashboardContainer'
import SinglePageContainer from './SinglePage/SinglePageContainer'
import ContentContainer from './Content/ContentContainer'
// import MediaContainer from './Media/MediaContainer';
import WelcomeContainer from './Welcome/WelcomeContainer';
// import LogInContainer from './LogIn/LogInContainer';

/**
 * Cretes Routes for Modules
 * @returns Switch and Routes
 */
export default class App extends React.Component {
  render() {
    return (
      <div className="full-container">
        <Switch>
          {/* Wizard Routers */}
          <Route exact path="/" component={WelcomeContainer} />
          <Route path="/SetUp" component={SetUpContainer} />
          {/* <Route exact path="/" component={InstallationContainer} /> */}
          {/* <Route exact path="/LogIn" component={LogInContainer} /> */}
          {/* Dashboard, templates Routes */}
          <Route path="/Dashboard" component={DashboardContainer} />
          <Route path="/Page" component={SinglePageContainer} />
          <Route exact path="/Content" component={ContentContainer} />
          {/* <Route exact path="/Media" component={MediaContainer} /> */}
        </Switch>
      </div>);
  }
}
