import React, { Component } from "react"
import PropTypes from "prop-types"

import "./Input.css"

import { FormConsumer } from "../Form/Form"

class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }

  static defaultProps = {
    label: "",
  }

  validate = (value, label) => {
    let error = ""

    if (!value) {
      error = `${label} is required!`
    }

    return error
  }

  handleOnChange = (e, { setValue, setError, values }) => {
    if (e.target.value && !values[this.props.name]) {
      setError(this.props.name, "")
    }

    setValue(e)
  }

  handleOnBlur = (e, { setError }) => {
    const error = this.validate(e.target.value, this.props.label)

    setError(e.target.name, error)
  }

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
              onChange={e => this.handleOnChange(e, context)}
              onBlur={e => this.handleOnBlur(e, context)}
              {...restInputProps}
            />

            {context.errors[name] && (
              <p className="input--error">{context.errors[name]}</p>
            )}
          </div>
        )}
      </FormConsumer>
    )
  }
}

export default Input
