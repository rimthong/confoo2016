import React, { PropTypes } from 'react'

const Downvoter = ({ onClick }) => (
  <div>
    <i className="fa fa-thumbs-o-down fa-2" onClick={onClick}/>
  </div>
)

Upvoter.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Downvoter
