/** Imports Frameworks. */
import  React  from 'react';
import { array, object } from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Single Page Table Item Module.
 * Gets value for form and prints this data.
 * @returns titlle, text and URL values
 */
const SiteMenu = (props) => {
  return (
    <nav className="main-nav">
      {props.pages.map(page => (
        <NavLink to={`/Site/${page.url}`} className="nav-item">{page.title}</NavLink>
      ))}
    </nav>
  );
}


/** Declares Props. */
SiteMenu.propTypes = {
  pages: array,
  page: object,
}

SiteMenu.defaultProps = {
  pages: [],
  page: {}
}

/** Exports the module. */
export default SiteMenu;