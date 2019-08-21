import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import { handleInitialData } from '../actions/shared';
import Home from './Home';
import QuestionPage from './QuestionPage';
import Nav from './Nav';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <LoadingBar />
          <div className="container">
            <Nav />

            {this.props.isLoggedIn === true
              ? <div>
                <Route path='/' exact component={Home} />
                <Route path='/questions/:id' component={QuestionPage} />
                <Route path='/add' component={NewQuestion} />
              </div>
              : <Login />}
          </div>
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