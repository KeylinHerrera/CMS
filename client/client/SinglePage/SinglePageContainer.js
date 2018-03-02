/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

/** Imports Modules. */
import SinglePageForm from './SinglePageForm';
import SinglePageFormEdit from './SinglePageFormEdit';
import SinglePageTable from './SinglePageTable';
import SinglePageDetails from './SinglePageDetails';
import SidebarMenuContainer from '../SidebarMenu/SidebarMenuContainer';

/** Imports from Actions. */
import { addNewPage, getPages, updatePage, deletePage } from './actions';

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
      newSinglePageTitle: '',
      newSinglePageURL: '',
      newSinglePageText: '',
      _id: '',
      /**
       * Shows Details Module.
       * @type {boolean}.
       */
      isEditing: false, 
      viewDetail: false,
    };

    /** Calls all methods since model. */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this); //

    /** Handles */
    this.handleInputChange = this.handleInputChange.bind(this); //
    this.handleInputChangeEditor = this.handleInputChangeEditor.bind(this); //
    this.handleSubmit = this.handleSubmit.bind(this); //
    this.handleDelete = this.handleDelete.bind(this); //
    this.handleViewDetails = this.handleViewDetails.bind(this); //

    /** Toogles */
    this.toogleEdit = this.toogleEdit.bind(this); 

    /** Save */
    this.onSave = this.onSave.bind(this); 
   
  }

  /** Loads data. */
  componentDidMount() {
    this.props.loadData();
  }

   /** Stays tuned for input changes*/
   handleInputChange(ev) {
    const target = ev.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  /** Stays tuned for TEXT input changes*/
  handleInputChangeEditor(ev) {
      var newContent = ev.editor.getData();

      this.setState({
        newSinglePageText: newContent
      })
  }

  /** Gets a input data and loads these in Data Base. */
  handleSubmit() { //evt
    const page = {};
    page.title = this.state.newSinglePageTitle;
    page.url = this.state.newSinglePageURL;
    page.text = this.state.newSinglePageText;
    // page.view = this.viewDetail;
    this.props.addNewPage(page);

    this.setState ({
      newSinglePageTitle: '',
      newSinglePageURL: '',
      newSinglePageText: '',
      viewDetail: false,
    });
  }

   /** Deletes Data. */
   handleDelete(ev){
    ev.preventDefault();
    console.log(ev.target.parentNode.parentNode.getAttribute('id'))
    this.props.deletePage(ev.target.parentNode.parentNode.getAttribute('id'))
  }

  /**
   * Changes the View Details
   * @type {boolean}
   */
  handleViewDetails() {
    this.state.viewDetail = true
  }

  /** Open Form Edit */
  toogleEdit(page) { 
    this.setState ({
      newSinglePageTitle: page.title,
      newSinglePageURL: page.url,      
      newSinglePageText: page.text,
      _id: page._id,
      isEditing: !this.state.isEditing
    });

    console.log('edit', this.state.isEditing)
  }

  /** Edits the data */
  onSave(event){
    const field = event.target.name;
    const page = {};

    page.title = this.state.newSinglePageTitle;
    page.url = this.state.newSinglePageURL;
    page.text = this.state.newSinglePageText;
    page._id = this.state._id;

    page[field] = event.target.value;
    this.props.updatePage(page);

    return this.setState({
      newSinglePageTitle: '',
      newSinglePageURL: '',
      newSinglePageText: '',
      _id: '',
      isEditing: false,
    });
  }


  render() {
    /**
    * Shows the Edit Form when the state is isEditing.
    * @returns Single Page Form Edit.
    */
    if (this.state.isEditing){ 
      return (
        <div>
          <h1> New Page </h1>
          <SinglePageFormEdit
            item={this.state}
            onSave={this.onSave}
            handleInputChange={this.handleInputChange}
            handleInputChangeEditor={this.handleInputChangeEditor} 
          />
        </div>
      )
    }

    /**
    * @returns Single Page Form and Table.
    */
    return (
      <div className="siglepage-container flex-container">
        <div className="sidebar-container section--small aligner blue-bg">
          <SidebarMenuContainer />
        </div>
        <div className="singlepage-container section-wrap section--lg">
          <SinglePageForm
            item={this.state}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            handleInputChangeEditor={this.handleInputChangeEditor}
          />

          <SinglePageTable 
            pages={this.props.pages}
            toogleEdit={this.toogleEdit}
            handleDelete={this.handleDelete}
            showDetails={this.showDetails}
            handleViewDetails={this.handleViewDetails} 
          />
          <SinglePageDetails 
            handleView={this.handleView}
          />
        </div>
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
    getDataPage: (page) => dispatch(getDataPage(page)),
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
