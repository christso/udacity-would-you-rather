import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

function QuestionList(props) {
  const { questions } = props;
  return (
    <div>
      <ul>
        {Object.keys(questions).map(qid => (
          <Question key={qid} questionId={qid} />
        ))}
      </ul>
      
    </div>
  );
}

export default connect()(QuestionList);