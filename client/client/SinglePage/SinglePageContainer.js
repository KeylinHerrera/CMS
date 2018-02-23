// Imports Frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

// Imports Modules
import SinglePageForm from './SinglePageForm';
import SinglePageTable from './SinglePageTable';

import { addNewPage, getPages } from './actions';

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
  };
}

SinglePageContainer.propTypes = {
  pages: array,
  addNewPage: func,
  loadData: func,
  // loading: bool,
};

SinglePageContainer.defaultProps = {
  pages: [],
  addNewPage: () => {},
  loadData: () => {},
  // loading: true,
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
