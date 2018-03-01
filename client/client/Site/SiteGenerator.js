/** Imports Frameworks. */
import React from 'react';
import { array } from 'prop-types';

/** Imports Modules. */
import SiteTemplate from './SiteTemplate'

/**
 * Site Generator Module.
 * Gets Page data.
 * @returns Div Structure.
 */
const SiteGenerator = (props) => {
  return (
    <div>
      {props.pages.map(page => (<SiteTemplate
        key={page._id} 
        page={page} 
      />))}
    </div>
  );
}

/** Declares Props */
SiteGenerator.propTypes = {
  pages: array,
};

SiteGenerator.defaultProps = {
  pages: [],
};

/** Exports the module. */
export default SiteGenerator;