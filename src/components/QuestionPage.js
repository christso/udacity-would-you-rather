import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import QuestionForm from './QuestionForm';

class QuestionPage extends Component {

  render() {
    const { question, author, authedUser } = this.props;

    return (
      <QuestionForm question={question} author={author} authedUser={authedUser} />
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const qid = match.params.id;
  const author = users[questions[qid].author];
  return {
    authedUser,
    question: questions[qid],
    author
  };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));