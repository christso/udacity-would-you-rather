import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';

class QuestionPage extends Component {
  state = {
    selectedOption: 'optionOne'
  }

  handleOptionChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      selectedOption: value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, authedUser, question } = this.props;

    dispatch(handleAnswerQuestion({
      authedUser,
      qid: question.id,
      answer: this.state.selectedOption
    }));
  }

  render() {
    const { authedUser, question } = this.props;

    return (
      <div>
        <h3>Would You Rather ...</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='radio'
              name='optionOne'
              value='optionOne'
              checked={this.state.selectedOption === 'optionOne'}
              onChange={this.handleOptionChange}
              className='form-check-input'
            />
            {question.optionOne.text}
          </label>
          <label>
            <input
              type='radio'
              name='optionTwo'
              value='optionTwo'
              checked={this.state.selectedOption === 'optionTwo'}
              onChange={this.handleOptionChange}
              className='form-check-input'
            />
            {question.optionTwo.text}
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, { match }) {
  const qid = match.params.id;
  return {
    authedUser,
    question: questions[qid]
  };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));