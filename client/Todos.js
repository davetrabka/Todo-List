import React, { Component } from 'react'
import axios from 'axios'

import CreateTodo from './CreateTodo'
import Todo from './Todo'

export default class Todos extends Component {
  constructor() {
    super()
    this.state = { todos: [] }
  }

  async componentDidMount() {
    const res = await axios.get('/api/todos')
    this.setState({ todos: res.data })
  }

  addNewTodo = newTodo => {
    const updatedTodosList = this.state.todos.slice()
    updatedTodosList.push(newTodo)
    this.setState({ todos: updatedTodosList })
  }

  removeTodo = async todoIndex => {
    const deletedTodo = this.state.todos.splice(todoIndex, 1)
    await axios.delete(`/api/todos/${deletedTodo[0].id}`)
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div id="todos">
        <CreateTodo addNewTodo={this.addNewTodo} />
        {this.state.todos.map((todo, index) => (
          <Todo
            todo={todo}
            todoIndex={index}
            removeTodo={this.removeTodo}
            key={todo.id}
          />
        ))}
      </div>
    )
  }
}
