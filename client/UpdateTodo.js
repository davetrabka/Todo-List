import React, { Component } from 'react'
import FormText from './FormText'
import axios from 'axios'

export default class UpdateTodo extends Component {
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
      await axios.put(`/api/todos/${this.props.todo.id}`, this.state)
      this.props.setUpdatedState(this.state)
      this.setState({ taskName: '', assignee: '' })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <FormText
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
