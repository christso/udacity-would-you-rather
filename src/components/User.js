import React from 'react';
import { connect } from 'react-redux';

function User(props) {
  const { user } = props;
  const answered = Object.keys(user.answers).length;
  const created = user.questions.length;

  return (
    <div className='card'>
      <h3>{user.name}</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={user.avatarURL} alt="Avatar" height="100" width="100"></img>
            </td>
            <td>
              <div className='row'>
                <div className='column'>Answered questions</div>
                <div className='column'>{answered}</div>
              </div>
              <div className='row'>
                <div className='column'>Created questions</div>
                <div className='column'>{created}</div>
              </div>
            </td>
            <td>
              <div>Score</div>
              <div>{answered + created}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  };
}

export default connect(mapStateToProps)(User);