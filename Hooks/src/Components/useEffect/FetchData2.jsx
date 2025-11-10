{/*install axios first by npm install axios --save*/}
//jsonplaceholder.typicode.com

import React from 'react'
import axios from 'axios'
function FetchData() {
  const [todos, setTodos] = React.useState(null)

  const divStyle = {
    backgroundColor: 'grey', 
    color: 'red', 
    borderRadius: '5px'
  };


  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response)
        setTodos(response.data)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div style={divStyle}>
      <h2>Data fetching using useEffect and axios</h2>
      {todos ? (
        <ul>
          {todos.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default FetchData