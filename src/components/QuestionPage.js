import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';
import QuestionResult from './QuestionResult';

export const OPTION_ONE = 'optionOne';
export const OPTION_TWO = 'optionTwo';

class QuestionPage extends Component {

  render() {
    const { question, author, authedUser } = this.props;
    if (!question) {
      this.props.history.push('/404');
      return null;
    }

    const answer = question.optionOne.votes.findIndex(id => id === authedUser) > -1
      ? OPTION_ONE
      : question.optionTwo.votes.findIndex(id => id === authedUser) > -1 
      ? OPTION_TWO
      : null;

    if (answer === null) {
      return (<QuestionForm question={question} author={author} authedUser={authedUser} />);
    }
  
    return (<QuestionResult question={question} yourAnswer={answer} author={author} authedUser={authedUser} />);
  }
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const qid = match.params.id;
  const question = questions[qid];
  if (!question) {
    return {
      authedUser,
      quesetion: null,
      author: null
    };
  }

  const author = users[question.author];
  return {
    authedUser,
    question: questions[qid],
    author
  };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));