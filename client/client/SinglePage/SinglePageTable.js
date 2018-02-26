import React from 'react';
import { array, func } from 'prop-types';

// import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn,} from 'material-ui/Table';

import SinglePageTableItem from './SinglePageTableItem'


const SinglePageTable = (props) => {
  
  return (
    <div>
      <h2>All Pages</h2>
      <table className="section__table ui celled table">
        <thead className="section__table-header">
          <tr>
            <td className="section__table-title">Tittle</td>
            <td className="section__table-title">Text</td>
            <td className="section__table-title">URL</td>
            <td className="">Show Details</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.pages.map(page => (<SinglePageTableItem 
            key={page.id} 
            page={page} 
            onDelete={props.handleDelete}  
            onView={props.handleView} 
            onDetailsView={props.handleViewDetails}
          />))}
        </tbody>
      </table>
    </div>
  );
}

SinglePageTable.propTypes = {
  pages: array,
  handleDelete: func,
  handleView: func,
  handleViewDetails: func
};

SinglePageTable.defaultProps = {
  pages: [],
  handleDelete: () => {},
  handleView: () => {},
  handleViewDetails: () => {}
};

export default SinglePageTable;