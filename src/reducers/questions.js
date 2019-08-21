import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      const { qid, authedUser, answer } = action;
      const optionOneVotes = state[qid].optionOne.votes;
      const optionTwoVotes = state[qid].optionTwo.votes;
      const hasVotedOne = optionOneVotes.findIndex(voter => voter === authedUser) > -1;
      const hasVotedTwo = optionTwoVotes.findIndex(voter => voter === authedUser) > -1;
      const hasVoted = hasVotedOne || hasVotedTwo;

      if (hasVoted) {
        console.warn('You already voted!');
        return state;
      }

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authedUser]
          }
        }

        // TODO: update state in user as well
      }
    default:
      return state;
  }
}