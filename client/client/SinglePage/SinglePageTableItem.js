import React from 'react';
import { object } from 'prop-types';

// import { TableRow, TableRowColumn } from 'material-ui/Table';

const SinglePageTableItem = (props) => {
  return (
    <tr id={props.page.id}>
      <td className="section__table-item">{props.page.title}</td>
      <td className="section__table-item">{props.page.text}</td>
      <td className="section__table-item">{props.page.url}</td>
    </tr>
  );
}

SinglePageTableItem.propTypes = {
  page: object,
}

SinglePageTableItem.defaultProps = {
  page: {},
}

export default SinglePageTableItem;