import React, { PropTypes } from 'react'

const Upvoter = ({ onClick }) => (
  <div>
    <i className="fa fa-thumbs-o-up fa-2" onClick={onClick}/>
  </div>
)

Upvoter.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Upvoter
