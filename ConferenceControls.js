import React from 'react'
import Upvoter from './Upvoter'

class ConferenceControls extends React.Component {
  render() {
    return (
      <div className="col-sm-1">
        <Upvoter onClick={this.props.onUpvoteClick}/>
        <div>
          {this.props.votes}
        </div>
        <div>
          <i className="fa fa-thumbs-o-down fa-2" onClick={this.props.onDownvoteClick}/>
        </div>
      </div>
    );
  }
}

export default ConferenceControls
