/** Imports Frameworks. */
import React from 'react';
import { array, func } from 'prop-types';

/** Imports Modules. */
import ContentTableItem from './ContentTableItem'

/**
 *  Content Table Module.
 * Creates table structure and calls the functions since  Content Container.
 * @func handleDelete, handleViewDetails
 * @returns Table Structure, thead and tbody
 */
const ContentTable = (props) => {
  
  return (
    <div>
      <h2>All Contents</h2>
      <table className="section__table ui celled table">
        <thead className="section__table-header">
          <tr>
            <td className="section__table-title">Title</td>
            <td className="section__table-title">URL</td>
            <td className="">Show Details</td>
            <td className="section__table-title">Edit</td>
            <td className="section__table-title">Delete</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.contents.map(content => (<ContentTableItem 
            key={content._id} 
            content={content} 
            onEdit={props.toogleEdit}
            onDelete={props.handleDelete}  
            onDetailsView={props.handleViewDetails}
          />))}
        </tbody>
      </table>
    </div>
  );
}

/** Declares Props */
ContentTable.propTypes = {
  contents: array,
  handleDelete: func,
  handleViewDetails: func,
  toogleEdit: func
};

ContentTable.defaultProps = {
  contents: [],
  handleDelete: () => {},
  handleViewDetails: () => {},
  toogleEdit: () => {}
};

/** Exports the module. */
export default ContentTable;