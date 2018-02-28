/** Imports Frameworks. */
import React from 'react';
import { func, object, string } from 'prop-types';
import CKEditor from "react-ckeditor-component";

import { Button, Input } from 'semantic-ui-react';

/**
 * Single Page Form Module.
 * Creates form for Add New Page.
 * @func handleSubmit, handleInputChange and handleInputChangeEditor.
 * @returns Form
 */
const SinglePageForm = props => (
  <div className="form-container" id="form-container">
    <div className="form-basic">
      <h2>Add New Page</h2>
      <div className="form-item">
        <label htmlFor="newSinglePageTitle">
          <Input type="text" name="newSinglePageTitle" onChange={props.handleInputChange} id="newSinglePageTitle" required="true" placeholder="Page Name" />
          {/* <p>Your page name.</p> */}
        </label>
      </div>

      <div className="form-item">
        <label htmlFor="newSinglePageURL">
          <Input type="text" name="newSinglePageURL" onChange={props.handleInputChange} id="newSinglePageURL" required="true" placeholder="URL" />
          {/* <p>URL.</p> */}
        </label>
      </div>
      
      <div className="form-item">
        <label htmlFor="newSinglePageText">
          <CKEditor 
            id="newSinglePageText"
            activeClass="p10" 
            content={props.item.newSinglePageText} 
            events={{
              "change": props.handleInputChangeEditor
            }}
          />
          {/* <p>Add text.</p> */}
        </label>
      </div>

      <div className="form-item">
        <Button type="submit" className="btn-primary blue btn-empty" onClick={props.handleSubmit}>Submit</Button>
      </div>
    </div>
  </div>
);

/** Declares Props. */
SinglePageForm.propTypes = {
  item: object,
  newSinglePageText: string,
  handleSubmit: func,
  handleInputChange: func,
  handleInputChangeEditor: func,
};

SinglePageForm.defaultProps = {
  item: {},
  newSinglePageText:'',
  handleSubmit: () => {},
  handleInputChange: () => {},
  handleInputChangeEditor: () => {},
};

/** Exports the module. */
export default SinglePageForm;
