import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function trimQuestionText(question) {
  return '...' + question.optionOne.text.substring(0, 15) + '...';
}

function Question(props) {
  const { question, author } = props;
  return (
    <div className='card'>
      <div className='card-heading'>{author.name} asks:</div>
      <div className='card-content'>
        <div>
          <img src={author.avatarURL} alt="Avatar" height="100" width="100"></img>
        </div>
        <div className='divider' />
        <div className='card-info'>        
          <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Would you rather</div>
          <div style={{marginBottom: '15px'}}>{trimQuestionText(question)}</div>
          <Link to={`/questions/${question.id}`}><button className='button-link'>View Poll</button></Link>
        </div>
      </div>
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