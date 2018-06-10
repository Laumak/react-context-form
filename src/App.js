import React, { Component } from "react"
import "./App.css"

import Form from "./components/Form"
import Input from "./components/Input"

class App extends Component {
  state = {
    input_1: "",
    input_2: "",
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="app">
        <Form className="app--form">
          {formProps => (
            <React.Fragment>
              <Input
                name="input_1"
                label="Input 1"
                value={this.state.input_1}
                onChange={this.handleOnChange}
              />

              <Input
                name="input_2"
                label="Input 2"
                value={this.state.input_2}
                onChange={this.handleOnChange}
              />
            </React.Fragment>
          )}
        </Form>
      </div>
    )
  }
}

export default App
