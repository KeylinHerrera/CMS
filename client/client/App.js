// Imports Frameworks
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Imports Modules
import SetUpContainer from './SetUp/SetUpContainer'
import DashboardContainer from './Dashboard/DashboardContainer'
import SinglePageContainer from './SinglePage/SinglePageContainer'

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Switch>
          {/* Wizard Routers */}
          {/* <Route exact path="/" component={WelcomeContainer} /> */}
          <Route exact path="/" component={SetUpContainer} />
          {/* <Route exact path="/" component={InstallationContainer} />
          <Route exact path="/" component={SuccessContainer} />
          <Route exact path="/" component={LogInContainer} /> */}
          {/* Dashboard, templates Routes */}
          <Route exact path="/Dashboard" component={DashboardContainer} />
          <Route exact path="/Page" component={SinglePageContainer} />
        </Switch>
      </div>);
  }
}
