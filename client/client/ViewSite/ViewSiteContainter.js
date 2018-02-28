/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

/** Imports from Actions. */
import {  getPages } from './actions';

/**
 * Single Page Container Module.
 * Creates the State for Pages.
 * Get Data, Submit, Done, Update, View Methods.
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
      // div > this.props..map > return template(crear)
      // danger
    )
  }
}

/** Subscribes new component to Redux Store Updates. */
function mapStateToProps(state) {
  return {
    loading: state.loading,
    pages: state.SinglePage.pages,
  };
}

/** All function inside this are Redux actions creator. */
function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(getPages());
    },
    getDataPage: (page) => dispatch(getDataPage(page)),
  };
}

/** Declares Props. */
SinglePageContainer.propTypes = {
  pages: array,
  loadData: func,
  getDataPage: func
};

SinglePageContainer.defaultProps = {
  pages: [],
  loadData: () => {},
  getDataPage: () => {}
};

/** Exports to a module. */
export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
