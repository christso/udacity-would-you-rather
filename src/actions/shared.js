import { hideLoading, showLoading } from 'react-redux-loading'
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { getInitialData } from '../util/api';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData().then(({users, questions}) => {
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    })
    
  }
}