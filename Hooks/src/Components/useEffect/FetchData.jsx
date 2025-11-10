{/*install axios first by npm install axios --save*/}
//jsonplaceholder.typicode.com

import React from 'react'
import axios from 'axios'
function FetchData() {
  const [posts, setPosts] = React.useState(null)

  const divStyle = {
    backgroundColor: 'lightblue', 
    color: 'black', 
    borderRadius: '5px'
  };


  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    }
    fetchData()
  }, [])

  return (
    <div style={divStyle}>
      <h2>Data fetching using useEffect and axios</h2>
      {posts ? (
        <ul>
          {posts.map(item => (
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