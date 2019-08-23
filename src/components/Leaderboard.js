import React from 'react';
import { connect } from 'react-redux';
import User from './User';

function Leaderboard(props) {
  const { users } = props;
  return (
    <div>
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  );
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users);
  const usersArray = userIds.map(id => {
    const user = users[id]; 
    const answered = Object.keys(user.answers).length;
    const created = user.questions.length;
    const score = answered + created;
    return {
      ...user,
      answered,
      created,
      score
    };
  });

  // Users are ordered in descending order 
  // based on the sum of the number of questions they’ve answered
  // and the number of questions they’ve asked.
  usersArray.sort((a, b) => b.score - a.score);

  return {
    users: usersArray
  };
}

export default connect(mapStateToProps)(Leaderboard);