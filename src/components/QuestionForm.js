import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import { OPTION_ONE, OPTION_TWO } from './QuestionPage';

export class QuestionForm extends Component {
  state = {
    selectedOption: OPTION_ONE
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
    const { author, question } = this.props;

    return (
      <div>
        <h2>{author.name} asks</h2>
        <h3>Would You Rather ...</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='radio'
              name={OPTION_ONE}
              value={OPTION_ONE}
              checked={this.state.selectedOption === OPTION_ONE}
              onChange={this.handleOptionChange}
              className='form-check-input'
            />
            {question.optionOne.text}
          </label>
          <br />
          <label>
            <input
              type='radio'
              name={OPTION_TWO}
              value={OPTION_TWO}
              checked={this.state.selectedOption === OPTION_TWO}
              onChange={this.handleOptionChange}
              className='form-check-input'
            />
            {question.optionTwo.text}
          </label>
          <button type='submit' className='button-action'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(QuestionForm);