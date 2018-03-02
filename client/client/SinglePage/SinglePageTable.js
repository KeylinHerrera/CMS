/** Imports Frameworks. */
import React from 'react';
import { array, func } from 'prop-types';

/** Imports Modules. */
import SinglePageTableItem from './SinglePageTableItem'

/**
 * Single Page Table Module.
 * Creates table structure and calls the functions since Single Page Container.
 * @func handleDelete, handleViewDetails
 * @returns Table Structure, thead and tbody
 */
const SinglePageTable = (props) => {
  
  return (
    <div>
      <h2>All Pages</h2>
      <table className="section__table ui celled table">
        <thead className="section__table-header">
          <tr>
            <td className="section__table-title">Title</td>
            <td className="section__table-title">URL</td>
            <td className="section__table-title">Edit</td>
            <td className="section__table-title">Delete</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.pages.map(page => (<SinglePageTableItem 
            key={page._id} 
            page={page} 
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
SinglePageTable.propTypes = {
  pages: array,
  handleDelete: func,
  handleViewDetails: func,
  toogleEdit: func
};

SinglePageTable.defaultProps = {
  pages: [],
  handleDelete: () => {},
  handleViewDetails: () => {},
  toogleEdit: () => {}
};

/** Exports the module. */
export default SinglePageTable;