import React from 'react';
import { OPTION_ONE, OPTION_TWO } from './QuestionPage';

function QuestionResult(props) {
  const { question, yourAnswer, author } = props;

  const oneVotes = question.optionOne.votes.length;
  const twoVotes = question.optionTwo.votes.length;
  const totalVotes = oneVotes + twoVotes;

  return (
    <div className='card'>
      <div className='card-heading'>Asked by {author.name}</div>
      <div className='card-content'>
        <div>
          <img src={author.avatarURL} alt="Avatar" height="100" width="100"></img>
        </div>
        <div className='divider' />
        <div>
          <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Results:</div>
          <div className='card-stat'>
            <div>{question.optionOne.text} {yourAnswer === OPTION_ONE ? ' (your vote)' : ''}</div>
            <div>{Math.round(oneVotes / totalVotes * 100)}%</div>
            <div>{oneVotes} out of {totalVotes} votes</div>
          </div>
          <div className='card-stat'>
            <div>{question.optionTwo.text} {yourAnswer === OPTION_TWO ? ' (your vote)' : ''}</div>
            <div>{Math.round(twoVotes / totalVotes * 100)}%</div>
            <div>{twoVotes} out of {totalVotes} votes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionResult;