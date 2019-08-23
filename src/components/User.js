import React from 'react';
import { connect } from 'react-redux';

function User(props) {
  const { user } = props;
  const answered = Object.keys(user.answers).length;
  const created = user.questions.length;

  return (
    <div className='container-body'>
      <div className='card-item-heading'>{user.name}</div>
      <div className='card-content'>
        <div>
          <img src={user.avatarURL} alt="Avatar" height="100" width="100"></img>
        </div>
        <div className='divider' />
        <div style={{ width: '70%'}}>
          <div style={{ marginBottom: '25px'}}>
            <div className='stat-param'>Answered questions</div>
            <div className='stat-value'>{answered}</div>
          </div>
          <hr />
          <div>
            <div className='stat-param'>Created questions</div>
            <div className='stat-value'>{created}</div>
          </div>
        </div>
        <div className='divider' />
        <div className='stat-col'>
          <div className='stat-col-param'>Score</div>
          <div className='stat-col-value'>{answered + created}</div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  };
}

export default connect(mapStateToProps)(User);