import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';

export class QuestionForm extends Component {
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
    const { author, question } = this.props;

    return (
      <div>
        {author.name} asks
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

export default connect()(QuestionForm);