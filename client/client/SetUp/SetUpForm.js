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
  <div className="form-container" id="form-container">
    <div className="form-basic">
      <div className="form-item">
        <label htmlFor="newUserName">
          <Input type="text" name="newUserName" onChange={props.handleInputChange} id="newUserName" required="true" placeholder="Username" />
          <p>Your database username.</p>
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newUserPassword">
          <Input type="password" name="newUserPassword" onChange={props.handleInputChange} id="newUserPassword" required="true" placeholder="Your chosen password" />
          <p>Your database password.</p>
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newDataBase">
          <Input type="text" name="newDataBase" onChange={props.handleInputChange} id="newDataBase" required="true" placeholder="Data Base" />
          <p>The name of the database.</p>
        </label>
      </div>

      <div className="">
        <NavLink to='/Dashboard'>
          <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}><p>Submit</p></button>
        </NavLink>
      </div>
    </div>
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
