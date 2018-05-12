import React from 'react'

const FormText = props => {
  const todo = props.state
  const handleChange = props.handleChange
  const handleSubmit = props.handleSubmit

  const warning = !todo.taskName ? (
    <span className="warning">Task name is required!</span>
  ) : (
    ''
  )

  let disabled = !todo.taskName || !todo.assignee

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName">New Task Name: {warning}</label>
      <input
        name="taskName"
        type="text"
        value={todo.taskName}
        onChange={handleChange}
      />

      <label htmlFor="assignee">Assigned To:</label>
      <input
        name="assignee"
        type="text"
        value={todo.assignee}
        onChange={handleChange}
      />

      <button type="submit" disabled={disabled}>
        Submit
      </button>
    </form>
  )
}

export default FormText
