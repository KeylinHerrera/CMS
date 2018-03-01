/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

/** Imports Modules. */
import LogInForm from './LogInForm';
import { authUsers } from './actions';

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
      UserName: '',
      UserPassword: '',
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
    this.props.authUsers(user);

    this.setState = ({
      UserName: '',
      UserPassword: '',
    });
  }

  render() {
    return (
      <div className="section--full salmon-bg aligner">
        <LogInForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>);
  }
}

/** Subscribes new component to Redux Store Updates. */
function mapStateToProps(state) {
  return {
    logIn: state.logIn,
  };
}

/** All function inside this are Redux actions creator. */
function mapDispatchToProps(dispatch) {
  return {
    authUsers: value => dispatch(authUsers(value)),
  };
}

/** Declares Props. */
SetUpContainer.propTypes = {
  authUsers: func,
  logIn: bool,
};

SetUpContainer.defaultProps = {
  logIn: false,
  authUsers:() => {}
};

/** Exports to a module. */
export default connect(mapStateToProps, mapDispatchToProps)(SetUpContainer);
