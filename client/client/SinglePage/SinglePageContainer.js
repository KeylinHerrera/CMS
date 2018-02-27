/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

/** Imports Modules. */
import SinglePageForm from './SinglePageForm';
import SinglePageTable from './SinglePageTable';
import SinglePageDetails from './SinglePageDetails';

/** Imports from Actions. */
import { addNewPage, getPages, updatePage, deletePage, getDataPage } from './actions';

/**
 * Single Page Container Module.
 * Creates the State for Pages.
 * Get Data, Submit, Done, Update, View Methods.
 * @returns Basic base from App.
 */
class SinglePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * Form Values.
       * @type {string}.
       */
      newSinglePageTittle: '',
      newSinglePageText: '',
      newSinglePageURL: '',
      /**
       * Shows Details Module.
       * @type {boolean}.
       */
      viewDetail: false,
    };

    /** Calls all methods since model. */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeEditor = this.handleInputChangeEditor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleViewDetails = this.handleViewDetails.bind(this);
  }

  /** Loads data. */
  componentDidMount() {
    this.props.loadData();
  }

  /** Stays tuned for input changes*/
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  /** Stays tuned for TEXT input changes*/
  handleInputChangeEditor(evt) {
      var newContent = evt.editor.getData();

      this.setState({
        newSinglePageText: newContent
      })
  }

  /** Gets a input data and loads these in Data Base. */
  handleSubmit() { //evt
    const page = {};
    page.title = this.state.newSinglePageTittle;
    page.text = this.state.newSinglePageText;
    page.url = this.state.newSinglePageURL;
    page.view = this.viewDetail;
    this.props.addNewPage(page);

    // var newContent = evt.editor.getData();

    this.setState ({
      newSinglePageTittle: '',
      newSinglePageText: '',
      newSinglePageURL: '',
      viewDetail: false,
    });
  }

  /**
   * Changes the View Details
   * @type {boolean}
   */
  handleViewDetails() {
    this.state.viewDetail = true
  }

  /** */ 
  handleDone(page) {
    this.props.updatePage(page)
  }

  /** Deletes Data. */
  handleDelete(ev){
    ev.preventDefault();
    this.props.deletePage(ev.target.parentNode.parentNode.getAttribute('id'))
  }

  render() {
    return (
      <div>
        <h1> New Page </h1>
        <SinglePageForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          handleInputChangeEditor={this.handleInputChangeEditor}
          item={this.state}
        />
        <SinglePageTable 
          pages={this.props.pages}
          showDetails={this.showDetails}
          handleViewDetails={this.handleViewDetails}
          handleDelete={this.handleDelete}
        />
        <SinglePageDetails 
          handleView={this.handleView}
        />
      </div>);
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
    addNewPage: value => dispatch(addNewPage(value)),
    loadData: () => {
      dispatch(getPages());
    },
    updatePage: (page) => dispatch(updatePage(page)),
    deletePage: (page) => dispatch(deletePage(page)),
    getDataPage: (page) => dispatch(getDataPage(page))
  };
}

/** Declares Props. */
SinglePageContainer.propTypes = {
  pages: array,
  addNewPage: func,
  loadData: func,
  updatePage: func,
  deletePage: func,
  getDataPage: func
};

SinglePageContainer.defaultProps = {
  pages: [],
  addNewPage: () => {},
  loadData: () => {},
  updatePage: () => {},
  deletePage: () => {},
  getDataPage: () => {}
};

/** Exports to a module. */
export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
