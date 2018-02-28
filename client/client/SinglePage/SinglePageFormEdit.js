/** Imports Frameworks. */
import React from 'react';
import { func, object, string } from 'prop-types';
import CKEditor from "react-ckeditor-component";

import { Button, Input } from 'semantic-ui-react';

/**
 * Single Page Form Edit Module.
 * Creates form for Edit data.
 * @func handleInputChange, handleInputChangeEditor and onSave.
 * @returns Form
 */

const SinglePageFormEdit = (props) => {
  if (props.item.isEditing) {
    return (
      <div className="form-container" id="form-container">
        <div className="form-basic">
          <h2>Add New Page</h2>
          <div className="form-item">
            <label htmlFor="newSinglePageTitle">
              <Input type="text" name="newSinglePageTitle" onChange={props.handleInputChange} id="newSinglePageTitle" required="true" value={props.item.newSinglePageTitle} placeholder="Page Name" />
              {/* <p>Your page name.</p> */}
            </label>
          </div>

          <div className="form-item">
            <label htmlFor="newSinglePageURL">
              <Input type="text" name="newSinglePageURL" onChange={props.handleInputChange} id="newSinglePageURL" required="true" value={props.item.newSinglePageURL} placeholder="URL" />
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
            <Button type="submit" className="btn-primary blue btn-empty" onClick={props.onSave}>Edit</Button>
          </div>
        </div>
      </div>
    );
  }
 };

/** Declares Props. */
SinglePageFormEdit.propTypes = {
  item: object,
  newSinglePageText: string,
  onSave: func,
  handleInputChange: func,
  handleInputChangeEditor: func,
};

SinglePageFormEdit.defaultProps = {
  item: {},
  newSinglePageText:'',
  onSave: () => {},
  handleInputChange: () => {},
  handleInputChangeEditor: () => {},
};

/** Exports the module. */
export default SinglePageFormEdit;