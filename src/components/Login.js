import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {

  handleChange = (e) => {
    const authedUser = e.target.value;
    // this.setState(() => ({ authedUser }));
    console.log(authedUser);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <div>
        <h3>Welcome to the Would You Rather App!</h3>
        <h5>Please sign in to continue</h5>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <select value={''} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <button type='submit'>Sign In</button>
        </form>
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