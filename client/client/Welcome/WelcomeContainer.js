/** Imports Frameworks. */
import React from 'react';
import { NavLink } from 'react-router-dom';

import SetUpContainer from '../SetUp/SetUpContainer';

/**
 * Welcome Module.
 * Prints a Welcome Menssage.
 * @returns titlle, text and URL values
 */
const WelcomeContainer = () => (
  <div className="welcome-container section--full aligner">
    <div className="welcome__info section-wrap section--md salmon-bg aligner">
      <div className="welcome__info-item">
        <h1>Welcome to CMS</h1>
        <p>You will nedd to know the following items before proceeding</p>
        <ul>
          <li>Database name</li>
          <li>Database password</li>
          <li>Database host</li>
        </ul>
      </div>
    </div>
    <div className="welcome__user section-wrap section--md blue-bg aligner">
      {/* <ul>
        <li>
          <button className="btn btn-secondary btn-setup">
            <NavLink to='/SetUp'><span>SetUp</span></NavLink >
          </button>
        </li>
        <li>
          <button className="btn btn-secondary btn-login">
            <NavLink to='/SetUp'><span>LogIn</span></NavLink >
          </button>
        </li>
      </ul> */}
      {/* 
      <button className="btn btn-secondary btn-login">
        <NavLink to='/SetUp'><span>SetUp</span></NavLink >
      </button> */}
      <SetUpContainer />
    </div>
  </div>
);

/** Exports the module. */
export default WelcomeContainer;
