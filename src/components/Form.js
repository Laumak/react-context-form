import React, { Component } from "react"
import PropTypes from "prop-types"

import "./Form.css"

class Form extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {}

  handleOnSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { children, onSubmit, ...rest } = this.props

    return (
      <form onSubmit={this.handleOnSubmit} {...rest}>
        <div className="form--wrapper">
          {children({
            ...this.props,
            ...this.state,
          })}
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
