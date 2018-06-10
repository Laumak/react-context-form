import React, { Component } from "react"
import PropTypes from "prop-types"

import "./Form.css"

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
  }

  handleOnChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.values)
  }

  render() {
    const { children, defaultValues, ...formProps } = this.props

    return (
      <FormProvider
        value={{ values: this.state.values, setValue: this.handleOnChange }}
      >
        <form {...formProps} onSubmit={this.handleOnSubmit}>
          <div className="form--wrapper">{children}</div>

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    )
  }
}

export default Form
