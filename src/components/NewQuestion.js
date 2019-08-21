import React, { Component } from 'react';
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
    return (
      <div>
        <h3>Create New Question</h3>
        <p>Complete the question:</p>
        <h2>Would you rather ...</h2>

        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleOptionOneChange} placeholder='Enter Option One Text here' />
          <p><strong>OR</strong></p>
          <input type='text' onChange={this.handleOptionTwoChange} placeholder='Enter Option Two Text here' />
          <br />
          <button 
            className='btn'
            type='submit'>
              Submit
          </button>
        </form>

      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    author: authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);