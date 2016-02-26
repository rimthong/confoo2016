export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'

export function upvote(index) {
  return { type: UPVOTE, index }
}

export function downvote(index) {
  return { type: DOWNVOTE, index }
}
