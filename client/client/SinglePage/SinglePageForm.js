import React from 'react';
import { func } from 'prop-types';

import { Button, Input } from 'semantic-ui-react';

const SinglePageForm = props => (
  <div className="form-container" id="form-container">
    <div className="form-basic">
      <h2>Add New Page</h2>
      <div className="form-item">
        <label htmlFor="newSinglePageTittle">
          <Input type="text" name="newSinglePageTittle" onChange={props.handleInputChange} id="newSinglePageTittle" required="true" placeholder="Page Name" />
          <p>Your page name.</p>
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newSinglePageText">
          <Input type="text" name="newSinglePageText" onChange={props.handleInputChange} id="newSinglePageText" required="true" placeholder="Add text" />
          <p>Add text.</p>
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newSinglePageURL">
          <Input type="text" name="newSinglePageURL" onChange={props.handleInputChange} id="newSinglePageURL" required="true" placeholder="URL" />
          <p>URL.</p>
        </label>
      </div>

      <div className="form-item">
        <Button type="submit" className="btn-primary blue btn-empty" onClick={props.handleSubmit}>Submit</Button>
      </div>
    </div>
  </div>
);

SinglePageForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
};

SinglePageForm.defaultProps = {
  handleSubmit: () => {},
  handleInputChange: () => {},
};


export default SinglePageForm;
