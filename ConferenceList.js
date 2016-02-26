import React from 'react'
import Conference from './Conference';
import { connect } from 'react-redux'
import { upvote, downvote } from './actions'

class ConferenceList extends React.Component {
  render() {
    return (
      <div className="container">
				{this.props.conferences.map( (conference, index) =>
					<Conference
						key={index}
						{...conference}
						onUpvoteClick={this.props.onUpvoteClick.bind(null, index)}
						onDownvoteClick={this.props.onDownvoteClick.bind(null, index)}
					/>
				)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {conferences:state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpvoteClick: (index) => {
      dispatch(upvote(index))
    },
    onDownvoteClick: (index) => {
      dispatch(downvote(index))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConferenceList)
