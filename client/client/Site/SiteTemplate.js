/** Imports Frameworks. */
import React from 'react';
import { object } from 'prop-types';

const ParserHtml = require('html-react-parser');
/**
 * Site Template Module.
 * Get data and prints html template.
 * @returns html template.
 */
const SiteTemplate = (props) => {

  const htmlContent = props.page.text
  
  return (
    <div id={props.page._id}>
      <h1 className="section__table-item">{props.page.title}</h1>
      <p className="section__table-item">{props.page.url}</p>
      <div className="section__table-item">{ParserHtml(`${htmlContent}`)}</div>
    </div>
  );
}

/** Declares Props. */
SiteTemplate.propTypes = {
  page: object,
}

SiteTemplate.defaultProps = {
  page: {},
}

/** Exports the module. */
export default SiteTemplate;