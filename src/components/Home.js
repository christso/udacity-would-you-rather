import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList'

function Home(props) {
  // users + questions
  const { authedUser, unansweredQuestions, answeredQuestions } = props;

  return (
    <div className='tabs'>
      <ul>
        <li>Unanswered Questions</li>
        <li>Answered Questions</li>
      </ul>
      <QuestionList authedUser={authedUser} questions={unansweredQuestions} />
      <QuestionList authedUser={authedUser} questions={answeredQuestions} />
    </div>

    // TODO: filter answered questions by authedUser
  )
}

function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser];
  if (!user) {
    return {
      authedUser: null,
      unansweredQuestions: [],
      answeredQuestions: []
    };
  }

  const answeredQids = Object.keys(user.answers);
  console.log(answeredQids)
 
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