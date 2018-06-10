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

  validate = e => {
    let error = ""

    if (!e.target.value) {
      error = `${e.target.name} is required!`
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
    setError(e.target.name, this.validate(e))
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
