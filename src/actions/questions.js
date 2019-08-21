import { saveQuestionAnswer, saveQuestion } from '../util/api';
import { showLoading, hideLoading } from 'react-redux-loading';

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
      .then(() => dispatch(answerQuestion(info)))
      .catch(e => {
        console.warn('Error in handleAnswerQuestion: ', e);
      });
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question 
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({ 
      optionOneText, 
      optionTwoText, 
      author: authedUser 
    })
      .then(question => {
        console.log('add question', question);
        dispatch(addQuestion(question));
      })
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        console.warn('Error in handleAddQuestion: ', e);
      });
  }
}