/** Imports Frameworks. */
import React from 'react';
import { object, func } from 'prop-types';
import { Button } from 'semantic-ui-react';

/**
 * Single Page Table Item Module.
 * Gets value for form and prints this data.
 * @returns titlle, text and URL values
 */
const SinglePageTableItem = (props) => {
  return (
    <tr id={props.page._id}>
      <td className="section__table-item">{props.page.title}</td>
      <td className="section__table-item">{props.page.url}</td>
      <td className="section__table-item"> <button className="btn btn-secondary" onClick={() =>props.onEdit(props.page)}><span>Edit</span></button></td>
      <td className="section__table-item"> <button className="btn btn-secondary" onClick={props.onDelete}><span>Delete</span></button></td>
    </tr>
  );
}

/** Declares Props. */
SinglePageTableItem.propTypes = {
  page: object,
  onDetailsView: func,
  onDelete:func,
  onEdit: func
}

SinglePageTableItem.defaultProps = {
  page: {},
  onDetailsView:() => {},
  onDelete: () => {},
  onEdit: () => {}
}

/** Exports the module. */
export default SinglePageTableItem;