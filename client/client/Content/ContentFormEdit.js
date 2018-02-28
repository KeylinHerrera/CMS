/** Imports Frameworks. */
import React from 'react';
import { func, object, string } from 'prop-types';
import CKEditor from "react-ckeditor-component";

import { Button, Input } from 'semantic-ui-react';

/**
 *  Content Form Edit Module.
 * Creates form for Edit data.
 * @func handleInputChange, handleInputChangeEditor and onSave.
 * @returns Form
 */

const ContentFormEdit = (props) => {
  if (props.item.isEditing) {
    return (
      <div className="form-container" id="form-container">
        <div className="form-basic">
          <h2>Add New Content</h2>
          <div className="form-item">
            <label htmlFor="newContentTitle">
              <Input type="text" name="newContentTitle" onChange={props.handleInputChange} id="newContentTitle" required="true" value={props.item.newContentTitle} placeholder="Content Name" />
              {/* <p>Your content name.</p> */}
            </label>
          </div>

          <div className="form-item">
            <label htmlFor="newContentURL">
              <Input type="text" name="newContentURL" onChange={props.handleInputChange} id="newContentURL" required="true" value={props.item.newContentURL} placeholder="URL" />
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
            <Button type="submit" className="btn-primary blue btn-empty" onClick={props.onSave}>Edit</Button>
          </div>
        </div>
      </div>
    );
  }
 };

/** Declares Props. */
ContentFormEdit.propTypes = {
  item: object,
  newContentText: string,
  onSave: func,
  handleInputChange: func,
  handleInputChangeEditor: func,
};

ContentFormEdit.defaultProps = {
  item: {},
  newContentText:'',
  onSave: () => {},
  handleInputChange: () => {},
  handleInputChangeEditor: () => {},
};

/** Exports the module. */
export default ContentFormEdit;
