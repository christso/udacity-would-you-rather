import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

function Nav(props) {
  return (
      <div className='topnav'>
        <NavLink to='/' exact activeClassName='active'>
          Home
      </NavLink>
        <NavLink to='/add' activeClassName='active'>
          New Question
      </NavLink>
        <NavLink to='/leaderboard' activeClassName='active'>
          Leader Board
      </NavLink>
      {props.authedUser ? (
        <div className="topnav topnav-right">
          <span to='/'>Hello, {props.authedUser.name}</span>
          <NavLink to='/' onClick={() => props.dispatch(setAuthedUser(null))}>Logout</NavLink>
        </div>)
        : null}
      </div>
  )
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: users[authedUser]
  };
}

export default connect(mapStateToProps)(Nav);