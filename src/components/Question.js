import React from 'react';
import { connect } from 'react-redux';

function Question(props) {
  
  return (
    <li>
      {props.questionId}
    </li>
  )
}

function mapStateToProps({ authedUser, questions }, { questionId }) {
  return {
    authedUser,
    question: questions[questionId]
  };
}

export default connect(mapStateToProps)(Question);