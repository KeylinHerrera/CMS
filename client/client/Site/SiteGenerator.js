/** Imports Frameworks. */
import React from 'react';
import { Switch, Route} from 'react-router-dom'
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
    <Switch>
      {props.pages.map( page => (
        console.log('url', page.url, page._id),
          <Route 
            exact 
            path={`/Site/${page.url}`}
            key={page._id}
            render={
              () => { return ( <SiteTemplate key={page._id} page={page} />)}
            }
          />))}
    </Switch>    
  );
}

// <div>
    //   {props.pages.map(page => (<SiteTemplate
    //     key={page._id} 
    //     page={page} 
    //   />))}
    // </div>

/** Declares Props */
SiteGenerator.propTypes = {
  pages: array,
};

SiteGenerator.defaultProps = {
  pages: [],
};

/** Exports the module. */
export default SiteGenerator;