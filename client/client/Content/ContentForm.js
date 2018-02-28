/** Imports Frameworks. */
import React from 'react';
import { func, object, string } from 'prop-types';
import CKEditor from "react-ckeditor-component";

import { Button, Input } from 'semantic-ui-react';

/**
 *  Content Form Module.
 * Creates form for Add New Content.
 * @func handleSubmit, handleInputChange and handleInputChangeEditor.
 * @returns Form
 */
const ContentForm = props => (
  <div className="form-container" id="form-container">
    <div className="form-basic">
      <h2>Add New Content</h2>
      <div className="form-item">
        <label htmlFor="newContentTitle">
          <Input type="text" name="newContentTitle" onChange={props.handleInputChange} id="newContentTitle" required="true" placeholder="Content Name" />
          {/* <p>Your content name.</p> */}
        </label>
      </div>

      <div className="form-item">
        <label htmlFor="newContentURL">
          <Input type="text" name="newContentURL" onChange={props.handleInputChange} id="newContentURL" required="true" placeholder="URL" />
          {/* <p>URL.</p> */}
        </label>
      </div>
      
      <div className="form-item">
        <label htmlFor="newContentText">
          <CKEditor 
            id="newContentText"
            activeClass="p10" 
            content={props.item.newContentText} 
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
ContentForm.propTypes = {
  item: object,
  newContentText: string,
  handleSubmit: func,
  handleInputChange: func,
  handleInputChangeEditor: func,
};

ContentForm.defaultProps = {
  item: {},
  newContentText:'',
  handleSubmit: () => {},
  handleInputChange: () => {},
  handleInputChangeEditor: () => {},
};

/** Exports the module. */
export default ContentForm;
