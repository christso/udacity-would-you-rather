import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    selectedUser: ''
  }

  handleChange = (e) => {
    const selectedUser = e.target.value;
    this.setState(() => ({ selectedUser }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.getSelectedUser()));
  }

  getSelectedUser() {
    return this.state.selectedUser || Object.keys(this.props.users)[0] || '';
  }

  render() {
    const { users } = this.props;
    const selectedUser = this.getSelectedUser();
    const userIds = Object.keys(users);

    return (
      <div className='container-body'>
        <div className='card-heading'>
          <div>Welcome to the Would You Rather App!</div>
          <div style={{fontSize: '12px', fontWeight: 'normal', marginTop: '10px'}}>Please sign in to continue</div>
        </div>
        <div className='card-content-rows'>
          <h2 style={{textAlign: 'center'}}>Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <select value={selectedUser} onChange={this.handleChange}>
              {userIds.map(id => (
                <option key={id} value={id} style={{ backgroundImage: users[id].avatarURL }}>
                  {users[id].name}
                </option>))}
            </select>
            <button type='submit' className='button-action'>Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Login);