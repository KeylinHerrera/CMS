/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

/** Imports Modules. */
import ContentForm from './ContentForm';
import ContentFormEdit from './ContentFormEdit';
import ContentTable from './ContentTable';

/** Imports from Actions. */
import { addNewContent, getContents, updateContent, deleteContent } from './actions';

/**
 *  Content Container Module.
 * Creates the State for Contents.
 * Get Data, Submit, Done, Update, View Methods.
 * @returns Basic base from App.
 */
class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * Form Values.
       * @type {string}.
       */
      newContentTitle: '',
      newContentURL: '',
      newContentText: '',
      _id: '',
      /**
       * Shows Details Module.
       * @type {boolean}.
       */
      isEditing: false, 
    };

    /** Calls all methods since model. */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this); //

    /** Handles */
    this.handleInputChange = this.handleInputChange.bind(this); //
    this.handleInputChangeEditor = this.handleInputChangeEditor.bind(this); //
    this.handleSubmit = this.handleSubmit.bind(this); //
    this.handleDelete = this.handleDelete.bind(this); //
    // this.handleViewDetails = this.handleViewDetails.bind(this); //

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
        newContentText: newContent
      })
  }

  /** Gets a input data and loads these in Data Base. */
  handleSubmit() { //evt
    const content = {};
    content.title = this.state.newContentTitle;
    content.url = this.state.newContentURL;
    content.text = this.state.newContentText;
    this.props.addNewContent(content);

    this.setState ({
      newContentTitle: '',
      newContentURL: '',
      newContentText: '',
    });
  }

   /** Deletes Data. */
   handleDelete(ev){
    ev.preventDefault();
    this.props.deleteContent(ev.target.parentNode.parentNode.getAttribute('id'))
  }

  /** Open Form Edit */
  toogleEdit(content) { 
    this.setState ({
      newContentTitle: content.title,
      newContentURL: content.url,      
      newContentText: content.text,
      _id: content._id,
      isEditing: !this.state.isEditing
    });

    console.log('edit', this.state.isEditing)
  }

  /** Edits the data */
  onSave(event){
    const field = event.target.name;
    const content = {};

    content.title = this.state.newContentTitle;
    content.url = this.state.newContentURL;
    content.text = this.state.newContentText;
    content._id = this.state._id;

    content[field] = event.target.value;
    this.props.updateContent(content);

    return this.setState({
      newContentTitle: '',
      newContentURL: '',
      newContentText: '',
      _id: '',
      isEditing: false,
    });
  }


  render() {
    /**
    * Shows the Edit Form when the state is isEditing.
    * @returns  Content Form Edit.
    */
    if (this.state.isEditing){ 
      return (
        <div>
          <h1> New Content </h1>
          <ContentFormEdit
            item={this.state}
            onSave={this.onSave}
            handleInputChange={this.handleInputChange}
            handleInputChangeEditor={this.handleInputChangeEditor} 
          />
        </div>
      )
    }

    /**
    * @returns  Content Form and Table.
    */
    return (
      <div>
        <h1> New Content </h1>
        <ContentForm
          item={this.state}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          handleInputChangeEditor={this.handleInputChangeEditor}
        />

        <ContentTable 
          contents={this.props.contents}
          toogleEdit={this.toogleEdit}
          handleDelete={this.handleDelete}
          showDetails={this.showDetails}
          handleViewDetails={this.handleViewDetails} 
        />
 
      </div>);
  }
}

/** Subscribes new component to Redux Store Updates. */
function mapStateToProps(state) {
  return {
    loading: state.loading,
    contents: state.Content.contents,
  };
}

/** All function inside this are Redux actions creator. */
function mapDispatchToProps(dispatch) {
  return {
    addNewContent: value => dispatch(addNewContent(value)),
    loadData: () => {
      dispatch(getContents());
    },
    updateContent: (content) => dispatch(updateContent(content)),
    deleteContent: (content) => dispatch(deleteContent(content)),
    getDataContent: (content) => dispatch(getDataContent(content)),
  };
}

/** Declares Props. */
ContentContainer.propTypes = {
  contents: array,
  addNewContent: func,
  loadData: func,
  updateContent: func,
  deleteContent: func,
  getDataContent: func
};

ContentContainer.defaultProps = {
  contents: [],
  addNewContent: () => {},
  loadData: () => {},
  updateContent: () => {},
  deleteContent: () => {},
  getDataContent: () => {}
};

/** Exports to a module. */
export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
