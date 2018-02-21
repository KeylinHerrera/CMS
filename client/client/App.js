import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SetUpContainer from './SetUp/SetUpContainer';
import DashboardContainer from './Dashboard/DashboardContainer';

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
          {/* <Route exact path="/" component={SinglePageContainer} />
          <Route exact path="/" component={EntitiesContainer} /> */}
        </Switch>
      </div>);
  }
}
