import React from 'react';
import { array, func } from 'prop-types';

// import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn,} from 'material-ui/Table';

import SinglePageTableItem from './SinglePageTableItem'


const SinglePageTable = (props) => {
  
  return (
    <table className="section__table">
      <thead className="section__table-header">
        <tr>
          <td className="section__table-title">Tittle</td>
          <td className="section__table-title">Text</td>
          <td className="section__table-title">URL</td>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.pages.map(page => <SinglePageTableItem key={page.id} page={page} onDelete={props.handleDelete}  onEdit={props.showFormEdit} />)}
      </tbody>
    </table>
  );
}

SinglePageTable.propTypes = {
  pages: array,
  handleDelete: func,
  showFormEdit: func,
};

SinglePageTable.defaultProps = {
  pages: [],
  handleDelete: () => {},
  showFormEdit: () => {},
};

export default SinglePageTable;