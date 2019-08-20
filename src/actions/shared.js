import { hideLoading, showLoading } from 'react-redux-loading'
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { getInitialData } from '../util/api';

export function handleInitialData(authedUser) {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData().then(({users, questions}) => {
      dispatch(setAuthedUser(authedUser));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    })
    
  }
}