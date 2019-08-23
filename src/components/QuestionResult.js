import React from 'react';
import { OPTION_ONE, OPTION_TWO } from './QuestionPage';
import ProgressMeter from './ProgressMeter';

function QuestionResult(props) {
  const { question, yourAnswer, author } = props;

  const oneVotes = question.optionOne.votes.length;
  const twoVotes = question.optionTwo.votes.length;
  const totalVotes = oneVotes + twoVotes;
  const oneVotePct = Math.round(oneVotes / totalVotes * 100);
  const twoVotePct = Math.round(twoVotes / totalVotes * 100);

  return (
    <div className='container-body'>
      <div className='card-heading'>Asked by {author.name}</div>
      <div className='card-content'>
        <div>
          <img src={author.avatarURL} alt="Avatar" height="100" width="100"></img>
        </div>
        <div className='divider' />
        
        <div className='results'>
          <div style={{fontWeight: 'bold', marginBottom: '10px', fontSize: '20px'}}>Results:</div>
          
          <div className={yourAnswer === OPTION_ONE ? 'card-stat-active' : 'card-stat'}>
          {yourAnswer === OPTION_ONE 
            ? <div className='card-sticker-container'>
                <div className='card-sticker-content'>Your vote</div>
              </div> : null }
            <div className='results-text'>Would you rather {question.optionOne.text}?</div>
            <ProgressMeter progressPercent={oneVotePct} />
            <div className='results-text'>{oneVotes} out of {totalVotes} votes</div>
          </div>
          
          <div className={yourAnswer === OPTION_TWO ? 'card-stat-active' : 'card-stat'}>
            {yourAnswer === OPTION_TWO ?
              <div className='card-sticker-container'>
                <div className='card-sticker-content'>Your vote</div>
              </div> : null}
            <div className='results-text'>Would you rather {question.optionTwo.text}?</div>
            <ProgressMeter progressPercent={twoVotePct} />
            <div className='results-text'>{twoVotes} out of {totalVotes} votes</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default QuestionResult;