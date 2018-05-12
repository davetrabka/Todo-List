import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Todo from './Todo'
import UpdateTodo from './UpdateTodo'

export default class SingleTodo extends Component {
  constructor() {
    super()
    this.state = {
      todo: {},
    }
  }

  async componentDidMount() {
    const todoId = this.props.match.params.todoId
    const res = await axios.get(`/api/todos/${todoId}`)
    this.setState({ todo: res.data })
  }

  setUpdatedState = updatedTodo => {
    this.setState({ todo: updatedTodo })
  }

  render() {
    const todo = this.state.todo
    return (
      <div id="single-todo">
        <Todo todo={todo} formLocation="update" />
        <UpdateTodo todo={todo} setUpdatedState={this.setUpdatedState} />
        <Link to="/">Back</Link>
      </div>
    )
  }
}
