import React from 'react';
import { object, func } from 'prop-types';

// import { TableRow, TableRowColumn } from 'material-ui/Table';

const SinglePageTableItem = (props) => {
  return (
    <tr id={props.page.id}>
      <td className="section__table-item">{props.page.title}</td>
      <td className="section__table-item">{props.page.text}</td>
      <td className="section__table-item">{props.page.url}</td>
      <td className="section__table-item">
        <button onClick={props.onView}>Details</button>
      </td>
    </tr>
  );
}

SinglePageTableItem.propTypes = {
  page: object,
  onView: func,
}

SinglePageTableItem.defaultProps = {
  page: {},
  onView:() => {}
}

export default SinglePageTableItem;