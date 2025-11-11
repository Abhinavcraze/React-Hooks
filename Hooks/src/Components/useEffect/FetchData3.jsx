import React from 'react'
import axios from 'axios'

function FetchData3() {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState('')
  const [todo, setTodo] = React.useState({})

  const divStyle = {
    backgroundColor: 'grey',
    color: 'red',
    borderRadius: '5px',
    padding: '10px'
  }

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        setLoading(false)
        setTodo(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setError('Error fetching data',error)
        setTodo({})
      })
  }, [])

  return (
    <div style={divStyle}>
      <h2>Data fetching using useEffect and axios</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p><b>Title:</b> {todo.title}</p>
          <p><b>Completed:</b> {todo.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  )
}

export default FetchData3
