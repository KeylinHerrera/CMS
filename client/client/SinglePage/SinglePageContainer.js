// Imports Frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

// Imports Modules
import SinglePageForm from './SinglePageForm';
import SinglePageTable from './SinglePageTable';
import SinglePageDetails from './SinglePageDetails';

import { addNewPage, getPages, updatePage, deletePage, getDataPage } from './actions';

class SinglePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSinglePageTittle: '',
      newSinglePageText: '',
      newSinglePageURL: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleViewDetails = this.handleViewDetails.bind(this);
  }

  componentDidMount() {
    this.props.loadData();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const page = {};
    page.title = this.state.newSinglePageTittle;
    page.text = this.state.newSinglePageText;
    page.url = this.state.newSinglePageURL;
    this.props.addNewPage(page);

    this.setState = ({
      newSinglePageTittle: '',
      newSinglePageText: '',
      newSinglePageURL: '',
    });
  }


  handleDone(page) {
    this.props.updatePage(page)
  }

  handleDelete(ev){
    ev.preventDefault();
    this.props.deletePage(ev.target.parentNode.parentNode.getAttribute('id'))
  }

  handleView(page){
    this.props.updatePage(page)
  }

  handleViewDetails(ev){
    ev.preventDefault();
    console.log('vwDe')
  }

  showDetails() {
    const details = document.getElementById("page-details");

      if (details.style.display == "block") {
        details.style.display = "none";
        // document.getElementById('formSpan').innerHTML="New";
      } else {
        details.style.display = "block";
        // document.getElementById('formSpan').innerHTML="Close Form";
      }
  }

  render() {
    return (
      <div>
        <h1> New Page </h1>
        <SinglePageForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SinglePageTable 
          pages={this.props.pages}
          showDetails={this.showDetails}
        />
        <SinglePageDetails 
          handleView={this.handleView}
          handleViewDetails={this.handleViewDetails}
        />
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    pages: state.SinglePage.pages,
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
