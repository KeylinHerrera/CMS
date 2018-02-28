/** Imports Frameworks. */
import React from 'react';
import { object, func } from 'prop-types';

/**
 *  Content Table Item Module.
 * Gets value for form and prints this data.
 * @returns titlle, text and URL values
 */
const ContentTableItem = (props) => {
  return (
    <tr id={props.content._id}>
      <td className="section__table-item">{props.content.title}</td>
      <td className="section__table-item">{props.content.url}</td>
      <td className="section__table-item"> <button onClick={props.onDetailsView}>Details</button></td>
      <td className="section__table-item"> <button onClick={() =>props.onEdit(props.content)}>Edit</button></td>
      <td className="section__table-item"> <button onClick={props.onDelete}>Delete</button></td>
    </tr>
  );
}

/** Declares Props. */
ContentTableItem.propTypes = {
  content: object,
  onDetailsView: func,
  onDelete:func,
  onEdit: func
}

ContentTableItem.defaultProps = {
  content: {},
  onDetailsView:() => {},
  onDelete: () => {},
  onEdit: () => {}
}

/** Exports the module. */
export default ContentTableItem;