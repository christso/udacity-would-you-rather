import React from 'react';

export default function User(props) {
  const { user } = props;
  const { answered, created, score } = user;

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
          <div className='stat-col-value'>{score}</div>
        </div>
      </div>
    </div>
  )
}