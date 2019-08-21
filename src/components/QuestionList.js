import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

function QuestionList(props) {
  const { questions } = props;
  return (
    <div>
      {Object.keys(questions).map(qid => (
        <Question key={qid} questionId={qid} />
      ))}
    </div>
  );
}

export default connect()(QuestionList);