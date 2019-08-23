import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList'

const UNANSWERED = 'unanswered';
const ANSWERED = 'answered';

class Home extends Component {
  state = {
    activeTab: UNANSWERED
  }

  onUnansweredClick = (e) => {
    this.setState(() => ({ activeTab: UNANSWERED }))
  }

  onAnsweredClick = (e) => {
    this.setState(() => ({ activeTab: ANSWERED }))
  }

  render() {
    const { authedUser, unansweredQuestions, answeredQuestions } = this.props;

    return (
      <div className='tabs'>
        <div className='tab'>
          <button onClick={this.onUnansweredClick} 
            className={this.state.activeTab === UNANSWERED ? 'active' : ''}>Unanswered Questions</button>
          <button onClick={this.onAnsweredClick} 
            className={this.state.activeTab === ANSWERED ? 'active' : ''}>Answered Questions</button>
        </div>
     
        {this.state.activeTab === UNANSWERED
          ? <QuestionList authedUser={authedUser} questions={unansweredQuestions} />
          : <QuestionList authedUser={authedUser} questions={answeredQuestions} />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser];
  if (!user) {
    return {
      authedUser: null,
      unansweredQuestions: {},
      answeredQuestions: {}
    };
  }

  const answeredQids = Object.keys(user.answers);
  const unansweredQuestions = Object.keys(questions)
    .filter(id => !answeredQids.includes(id))
    .reduce((q, id) => {
      q[id] = questions[id]
      return q;
    }, {});
  const answeredQuestions = Object.keys(questions)
    .filter(id => answeredQids.includes(id))
    .reduce((q, id) => {
      q[id] = questions[id]
      return q;
    }, {});

  return {
    authedUser,
    unansweredQuestions,
    answeredQuestions
  };
}

export default connect(mapStateToProps)(Home);