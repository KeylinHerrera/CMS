/** Imports Frameworks. */
import React from 'react';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';

// import { Input } from 'semantic-ui-react';

/**
 * SetUp Form Module.
 * Creates form for SetUp.
 * @func handleSubmit, handleInputChange.
 * @returns Form
 */
const LogInForm = props => (
  <div className="login-form form-container setup-container blue-bg uppercase" id="form-container">
    <div>
      <h2> Setup Configuration </h2> 
      <form className="form-basic">
        <div className="form-item">
          <label htmlFor="newUserName">
            <p>Your username.</p>
            <input type="text" name="newUserName" onChange={props.handleInputChange} id="newUserName" required="true" placeholder="Username" />
          </label>

        </div>
        <div className="form-item">
          <label htmlFor="newUserPassword">
            <p>Your password.</p>
            <input type="password" name="newUserPassword" onChange={props.handleInputChange} id="newUserPassword" required="true" placeholder="Password" />
          </label>
        </div>

        <div className="">
          <NavLink to='/Dashboard'>
            <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}><NavLink to='/Dashboard'><span>Log In</span></NavLink></button>
          </NavLink>
        </div>
      </form>
    </div>
  </div>
);

/** Declares Props. */
LogInForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
};

/** Exports the module. */
LogInForm.defaultProps = {
  handleSubmit: () => {},
  handleInputChange: () => {},
};


export default LogInForm;
