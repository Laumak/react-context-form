import React, { Component } from "react"
import PropTypes from "prop-types"

import "./Form.css"
import { Object } from "core-js"

export const {
  Provider: FormProvider,
  Consumer: FormConsumer,
} = React.createContext({})

class Form extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    defaultValues: PropTypes.object.isRequired,
  }

  state = {
    values: this.props.defaultValues,
    errors: {},
  }

  handleOnChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    })
  }

  setError = (name, error) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: error,
      },
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.values)
  }

  hasFormErrors = errors => Object.keys(errors).some(key => !!errors[key])

  render() {
    const { children, defaultValues, ...formProps } = this.props

    return (
      <FormProvider
        value={{
          values: this.state.values,
          setValue: this.handleOnChange,
          errors: this.state.errors,
          setError: this.setError,
        }}
      >
        <form {...formProps} onSubmit={this.handleOnSubmit}>
          <div className="form--wrapper">{children}</div>

          <button
            type="submit"
            disabled={this.hasFormErrors(this.state.errors)}
          >
            Submit
          </button>
        </form>
      </FormProvider>
    )
  }
}

export default Form
