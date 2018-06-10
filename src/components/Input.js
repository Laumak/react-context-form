import React, { Component } from "react"
import PropTypes from "prop-types"

class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,

    label: PropTypes.string,
  }

  static defaultProps = {
    label: "",
  }

  state = {}

  render() {
    const { label, ...inputProps } = this.props

    return (
      <div className="input">
        <p>{label}</p>

        <input {...inputProps} />
      </div>
    )
  }
}

export default Input
