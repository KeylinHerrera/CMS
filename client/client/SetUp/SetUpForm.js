/** Imports Frameworks. */
import React from 'react';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Input } from 'semantic-ui-react';

/**
 * SetUp Form Module.
 * Creates form for SetUp.
 * @func handleSubmit, handleInputChange.
 * @returns Form
 */
const SetUpForm = props => (
  <div className="form-container setup-container uppercase" id="form-container">
    <h2> Setup Configuration </h2> 
    <form className="form-basic">
      <div className="form-item">
        <label htmlFor="newUserName">
          <p>Your database username.</p>
          <input type="text" name="newUserName" onChange={props.handleInputChange} id="newUserName" required="true" placeholder="Username" />
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newUserPassword">
          <p>Your database password.</p>
          <input type="password" name="newUserPassword" onChange={props.handleInputChange} id="newUserPassword" required="true" placeholder="Your chosen password" />
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newDataBase">
          <p>The name of the database.</p>
          <input type="text" name="newDataBase" onChange={props.handleInputChange} id="newDataBase" required="true" placeholder="Data Base" />
        </label>
      </div>

      <div className="">
        <NavLink to='/Dashboard'>
          <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}><NavLink to='/LogIn'><span>Submit!</span></NavLink></button>
        </NavLink>
      </div>
    </form>
  </div>
);

/** Declares Props. */
SetUpForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
};

/** Exports the module. */
SetUpForm.defaultProps = {
  handleSubmit: () => {},
  handleInputChange: () => {},
};


export default SetUpForm;
