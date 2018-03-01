/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array, bool } from 'prop-types';

/** Imports Modules. */
import SetUpForm from './SetUpForm';
import { addUser, getUsers } from './actions';

/**
 * SetUp Container Module.
 * Creates the State.
 * Get Data, Submit, Done, Update.
 * @returns Basic base from Setup Form.
 */
class SetUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       /**
       * Form Values.
       * @type {string}.
       */
      newUserName: '',
      newUserPassword: '',
      newDataBase: '',
    };

    /** Calls all methods since model. */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** Loads data. */
  componentDidMount() {
    // this.props.loadData();
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

  /** Gets a input data and loads these in Data Base. */
  handleSubmit() {
    const user = {};
    user.name = this.state.newUserName;
    user.password = this.state.newUserPassword;
    user.database = this.state.newDataBase;
    this.props.addUser(user);

    this.setState = ({
      newUserName: '',
      newUserPassword: '',
      newDataBase: '',
    });
  }

  render() {
    return (
      <div className="section--md blue-bg">
        {/* <h1> Setup Configuration </h1> */}
        <SetUpForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>);
  }
}

/** Subscribes new component to Redux Store Updates. */
function mapStateToProps(state) {
  return {
    loading: state.loading,
    users: state.users,
  };
}

/** All function inside this are Redux actions creator. */
function mapDispatchToProps(dispatch) {
  return {
    addUser: value => dispatch(addUser(value)),
    loadData: () => {
      dispatch(getUsers());
    },
  };
}

/** Declares Props. */
SetUpContainer.propTypes = {
  users: array,
  addUser: func,
  loadData: func,
  loading: bool,
};

SetUpContainer.defaultProps = {
  users: [],
  addUser: () => {},
  loadData: () => {},
  loading: true,
};

/** Exports to a module. */
export default connect(mapStateToProps, mapDispatchToProps)(SetUpContainer);
