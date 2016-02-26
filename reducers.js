import { UPVOTE, DOWNVOTE } from './actions'

function confooReducer(state = [], action) {
  switch (action.type) {
    case UPVOTE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          votes: ++state[action.index].votes
        }),
        ...state.slice(action.index + 1)
      ]
    case DOWNVOTE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          votes: --state[action.index].votes
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

export default confooReducer
