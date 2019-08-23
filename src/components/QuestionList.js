import React from 'react';
import Question from './Question';

export default function QuestionList(props) {
  const { questions } = props;
  // arrange ids by timestamp descending
  const questionIds = Object.keys(questions)
    .sort((a, b) => {
      return questions[b].timestamp - questions[a].timestamp; 
    });

  return (
    <div>
      {questionIds.map(qid => (
        <Question key={qid} questionId={qid} />
      ))}
    </div>
  );
}