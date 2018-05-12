import React, { Component } from 'react'
import axios from 'axios'

import FormText from './FormText'

export default class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: '',
      assignee: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/todos/', this.state)
      this.props.addNewTodo(this.state)
      this.setState({ taskName: '', assignee: '' })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <FormText
        state={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}
