/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import { NavLink } from 'react-router-dom';

/** Imports from Actions. */
import { getPages } from './actions';

import SiteMenu from './SiteMenu';
import SiteGenerator from './SiteGenerator';
import SidebarMenuContainer from '../SidebarMenu/SidebarMenuContainer';

/**
 * Single Page Container Module.
 * Creates the State for Pages.
 * Get Data.
 * @returns Basic base from App.
 */
class SinglePageContainer extends Component {
  constructor(props) {
    super(props);   
  }

  /** Loads data. */
  componentDidMount() {
    this.props.loadData();
  }

  render() {
  
    return (
      <div className="section--full aligner">
        <div className="sidebar-container section-wrap section--small blue-bg aligner">
          <SidebarMenuContainer />
        </div>
        <div className="site-section section-wrap section--lg aligner">
          <SiteMenu 
            pages={this.props.pages}  
          />
          <SiteGenerator 
            pages={this.props.pages}
          />
        </div>
      </div>
    )
  }
}

/** Subscribes new component to Redux Store Updates. */
function mapStateToProps(state) {
  return {
    pages: state.SinglePage.pages,
  };
}

/** All function inside this are Redux actions creator. */
function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(getPages());
    },
  };
}

/** Declares Props. */
SinglePageContainer.propTypes = {
  pages: array,
  loadData: func,
};

SinglePageContainer.defaultProps = {
  pages: [],
  loadData: () => {},
};

/** Exports to a module. */
export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
