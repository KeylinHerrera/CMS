/** Imports Frameworks. */
import React from 'react';
import { object } from 'prop-types';

/**
 * Single Page Details Module.
 * Gets Data and Prints this data.
 * @func handleSubmit, handleInputChange.
 * @returns Form.
 */
const SinglePageDetails = (props) => {
  return (
    <div>
      <h3>{props.page.title}</h3>
      <p>{props.page.text}</p>
      <strong>{props.page.url}</strong>
    </div>
  );
}

/** Declares Props. */
SinglePageDetails.propTypes = {
  page: object,
}

SinglePageDetails.defaultProps = {
  page: {},
}

/** Exports the Module. */
export default SinglePageDetails;