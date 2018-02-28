/** Imports Frameworks. */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Welcome Module.
 * Prints a Welcome Menssage.
 * @returns titlle, text and URL values
 */
const WelcomeContainer = () => (
  <div className="welcome-container full-view aligner">
    <div className="">
      <h2>Welcome to CMS</h2>
      <p>You will nedd to know the following items before proceeding</p>
      <ol>
        <li>Database name</li>
        <li>Database password</li>
        <li>Database host</li>
      </ol>
      <button className="btn btn-primary">
        <NavLink to='/SetUp'><p>Lets go!</p></NavLink >
      </button>
    </div>
  </div>
);

/** Exports the module. */
export default WelcomeContainer;
