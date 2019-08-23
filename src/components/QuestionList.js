import React from 'react';
import Question from './Question';

export default function QuestionList(props) {
  const { questions } = props;
  const questionIds = Object.keys(questions)
    .sort((a, b) => {
      return questions[a].timestamp - questions[b].timestamp; 
    });

  return (
    <div>
      {questionIds.map(qid => (
        <Question key={qid} questionId={qid} />
      ))}
    </div>
  );
}