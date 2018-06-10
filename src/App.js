import React, { Component } from "react"
import "./App.css"

import Form from "./components/Form"
import Input from "./components/Input"

class App extends Component {
  handleOnSubmit = values => {
    console.log(values)
  }

  render() {
    return (
      <div className="app">
        <Form
          className="app--form"
          onSubmit={this.handleOnSubmit}
          defaultValues={{ input_1: "", input_2: "" }}
        >
          <Input name="input_1" label="Input 1" />

          <Input name="input_2" label="Input 2" />
        </Form>
      </div>
    )
  }
}

export default App
