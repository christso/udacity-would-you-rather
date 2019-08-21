import React from 'react';
import { OPTION_ONE, OPTION_TWO } from './QuestionPage';

function QuestionResult(props) {
  const { question, yourAnswer, author, authedUser } = props;

  const oneVotes = question.optionOne.votes.length;
  const twoVotes = question.optionTwo.votes.length;
  const totalVotes = oneVotes + twoVotes;
  
  console.log(props);
  return (
    <div>
      <h3>Asked by {author.name}</h3> 
      <h2>Results:</h2>
      <div>{question.optionOne.text} {yourAnswer == OPTION_ONE ? ' (your vote)' : ''}</div>
      <p>{oneVotes} out of {totalVotes} votes</p>
      <br />
      <div>{question.optionTwo.text} {yourAnswer === OPTION_TWO ? ' (your vote)' : ''}</div>
      <p>{twoVotes} out of {totalVotes} votes</p>
    </div>
  )
}

export default QuestionResult;