import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question(props) {
  const { question, author } = props;
  return (
    <div className='card'>
      <div className='card-heading'>{author.name} asks</div>
      <br />
      <img src={author.avatarURL} alt="Avatar" height="100" width="100"></img>
      <p><strong>Would you rather</strong></p>
      <p>{question.optionOne.text}</p>
      <br />
      <Link to={`/questions/${question.id}`}><button className='button-link'>View Poll</button></Link>
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