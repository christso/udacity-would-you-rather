import React from 'react';
import { connect } from 'react-redux';
import User from './User';

function Leaderboard(props) {
  const { users } = props;
  const userIds = Object.keys(users);
  return (
    <div>
      {userIds.map(id => <User key={id} id={id} />)}
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);