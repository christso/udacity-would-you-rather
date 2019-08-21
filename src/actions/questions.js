import { saveQuestionAnswer } from '../util/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then(dispatch(answerQuestion(info)))
      .catch(e => {
        console.warn('Error in handleAnswerQuestion: ', e);
      });
  }
}