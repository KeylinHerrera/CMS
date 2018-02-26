import React from 'react';
import { object } from 'prop-types';

// import { TableRow, TableRowColumn } from 'material-ui/Table';

const SinglePageDetails = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Details</h2>
      <h3>{props.page.title}</h3>
      <p>{props.page.text}</p>
      <strong>{props.page.url}</strong>
    </div>
  );
}

SinglePageDetails.propTypes = {
  page: object,
}

SinglePageDetails.defaultProps = {
  page: {},
}

export default SinglePageDetails;