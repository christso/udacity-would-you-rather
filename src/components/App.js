import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return ( 
      <div className="App">
        <LoadingBar />
        <Login />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);