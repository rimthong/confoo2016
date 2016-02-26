import React from 'react'
import ConferenceControls from './ConferenceControls'

class Conference extends React.Component {
  render() {
    return (
			<div className="row">
				<ConferenceControls
					onUpvoteClick = {this.props.onUpvoteClick}
					onDownvoteClick = {this.props.onDownvoteClick}
					votes = {this.props.votes}
				/>
				<div className="col-sm-2">
					<img src={this.props.image}/>
				</div>
				<div className="col-sm-9">
					<strong>{this.props.title}</strong><br/>
					{this.props.description}
				</div>
			</div>
		);
  }
}

Conference.propTypes = {
	title: React.PropTypes.string.isRequired,
	votes: React.PropTypes.number.isRequired
}

export default Conference
