import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import { handleInitialData } from '../actions/shared';
import Home from './Home';
import QuestionPage from './QuestionPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <LoadingBar />
          {this.props.isLoggedIn === true
            ? <div>
                <Route path='/' exact component={Home} />
                <Route path='/questions/:id' component={QuestionPage} />
              </div>
            : <Login /> }
          
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);