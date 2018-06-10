import React, { Component } from "react"
import PropTypes from "prop-types"

import { FormConsumer } from "./Form/Form"

class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }

  static defaultProps = {
    label: "",
  }

  state = {}

  render() {
    const { name, label, ...restInputProps } = this.props

    return (
      <FormConsumer>
        {context => (
          <div className="input">
            <p>{label}</p>

            <input
              name={name}
              value={context.values[name]}
              onChange={context.setValue}
              {...restInputProps}
            />
          </div>
        )}
      </FormConsumer>
    )
  }
}

export default Input
