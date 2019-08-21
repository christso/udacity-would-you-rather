import React from 'react';
import { connect } from 'react-redux';

function Question(props) {
  const { question, author } = props;
  return (
    <div className='card'>
      <div className='card-heading'>{author.name} asks</div>
      <br />
      <img src={author.avatarURL} alt="Avatar" height="100" width="100"></img>
      <p><strong>Would you rather</strong></p>
      <p>{question.optionOne.text}</p>
    </div>
  )
}

function mapStateToProps({ authedUser, questions, users }, { questionId }) {
  return {
    authedUser,
    question: questions[questionId],
    author: users[questions[questionId].author]
  };
}

export default connect(mapStateToProps)(Question);