import React from 'react';
import { OPTION_ONE, OPTION_TWO } from './QuestionPage';

function QuestionResult(props) {
  const { question, yourAnswer, author } = props;

  const oneVotes = question.optionOne.votes.length;
  const twoVotes = question.optionTwo.votes.length;
  const totalVotes = oneVotes + twoVotes;
  
  console.log(props);
  return (
    <div>
      <h3>Asked by {author.name}</h3> 
      <div>{question.optionOne.text} {yourAnswer === OPTION_ONE ? ' (your vote)' : ''}</div>
      <div>{Math.round(oneVotes/totalVotes*100)}%</div>
      <div>{oneVotes} out of {totalVotes} votes</div>
      <br />
      <div>{question.optionTwo.text} {yourAnswer === OPTION_TWO ? ' (your vote)' : ''}</div>
      <div>{Math.round(twoVotes/totalVotes*100)}%</div>
      <div>{twoVotes} out of {totalVotes} votes</div>
    </div>
  )
}

export default QuestionResult;