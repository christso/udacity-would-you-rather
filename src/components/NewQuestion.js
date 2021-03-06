import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText));
    this.props.history.push('/');
  }

  handleOptionOneChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ optionOneText: text }));
  }

  handleOptionTwoChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ optionTwoText: text }));
  }

  render() {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <div>
        <div className='container-body'>
          <div className='card-heading'>Create New Question</div>
          <div className='card-content-rows'>
            <div>Complete the question:</div>
            <h3>Would you rather ...</h3>

            <form onSubmit={this.handleSubmit}>
              <input type='text' onChange={this.handleOptionOneChange} placeholder='Enter Option One Text here' />
              <p><strong>OR</strong></p>
              <input type='text' onChange={this.handleOptionTwoChange} placeholder='Enter Option Two Text here' />
              <br />
              <button
                className='button-action'
                type='submit'
                disabled={optionOneText === '' || optionTwoText === ''}>
                Submit
          </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    author: authedUser
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));