import { hideLoading, showLoading } from 'react-redux-loading'
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { getInitialData } from '../util/api';

export function handleInitialData(authedUser) {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData().then(({users, questions}) => {
      dispatch(setAuthedUser(authedUser));
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    })
    
  }
}