import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Input } from 'semantic-ui-react';

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
          <Input type="text" name="newUserPassword" onChange={props.handleInputChange} id="newUserPassword" required="true" placeholder="Your chosen password" />
          <p>Your database password.</p>
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newDataBase">
          <Input type="text" name="newDataBase" onChange={props.handleInputChange} id="newDataBase" required="true" placeholder="Data Base" />
          <p>The name of the database.</p>
        </label>
      </div>

      <div className="form-item">
          <Link to='/Dashboard'>
            <Button type="submit" className="btn-primary blue btn-empty" onClick={props.handleSubmit}>Submit</Button>
          </Link>
      </div>
    </div>
  </div>
);

SetUpForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
};

SetUpForm.defaultProps = {
  handleSubmit: () => {},
  handleInputChange: () => {},
};


export default SetUpForm;
