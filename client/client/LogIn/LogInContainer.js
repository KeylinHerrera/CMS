/** Imports Frameworks. */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';
import { Redirect, Route, Switch} from 'react-router-dom'

/** Imports Modules. */
import LogInForm from './LogInForm';
import { authUser } from './actions';

/**
 * SetUp Container Module.
 * Creates the State.
 * Get Data, Submit, Done, Update.
 * @returns Basic base from Setup Form.
 */
class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       /**
       * Form Values.
       * @type {string}.
       */
      UserName: '',
      UserPassword: '',
      // islogIn: false,
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

    console.log(name, value)
    
    
    this.setState({
      [name]: value,
    });
    console.log(this.state)
  }

  /** Gets a input data and loads these in Data Base. */
  handleSubmit() {
    const user = {};
    user.name = this.state.UserName;
    user.password = this.state.UserPassword;
    this.props.authUser(user);

    console.log('props', this.props.user)

    // this.setState = ({
    //   UserName: '',
    //   UserPassword: '',
    // });
  }

  render() {
    return (
      <div className="section--full salmon-bg aligner">
        <Switch>
          <Route
            to="/LogIn"
            render={() => {
              console.log('is loggued?',this.props.logIn)
              if(this.props.logIn) {
                return <Redirect to="/Dashboard" />
                  // Window.location = "http://www.mozilla.org"
              } else {
                return <LogInForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
              }
            }}
          />
        </Switch>
        {/* <LogInForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />) */}
      </div>);
  }
}

/** Subscribes new component to Redux Store Updates. */
function mapStateToProps(state) {
  return {
    logIn: state.LogIn.logIn,
  };
}

/** All function inside this are Redux actions creator. */
function mapDispatchToProps(dispatch) {
  return {
    authUser: value => dispatch(authUser(value)),
  };
}

/** Declares Props. */
LogInContainer.propTypes = {
  logIn: bool,
  user: object,
  authUser: func,
};

LogInContainer.defaultProps = {
  logIn: false,
  user: {},
  authUser:() => {}
};

/** Exports to a module. */
export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
