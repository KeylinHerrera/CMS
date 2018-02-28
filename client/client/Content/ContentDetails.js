/** Imports Frameworks. */
import React from 'react';
import { object } from 'prop-types';

/**
 *  content Details Module.
 * Gets Data and Prints this data.
 * @func handleSubmit, handleInputChange.
 * @returns Form.
 */
const ContentDetails = (props) => {
  return (
    <div>
      <h2>Details</h2>
      <h3>{props.content.title}</h3>
      <p>{props.content.text}</p>
      <strong>{props.content.url}</strong>
    </div>
  );
}

/** Declares Props. */
ContentDetails.propTypes = {
  content: object,
}

ContentDetails.defaultProps = {
  content: {},
}

/** Exports the Module. */
export default ContentDetails;