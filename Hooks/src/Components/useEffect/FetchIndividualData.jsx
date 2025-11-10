import React from 'react'
import axios from 'axios'

function FetchData() {
  const [todo, setTodo] = React.useState({});
  const [id, setId] = React.useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = React.useState(1);

  const divStyle = {
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '5px',
    padding: '10px',
  };

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${idFromButtonClick}`)
      .then(response => setTodo(response.data))
      .catch(error => console.error(error));
  }, [idFromButtonClick]);

  return (
    <div style={divStyle}>
      <input
        type="number"
        value={id}
        onChange={e => setId(Number(e.target.value))}
      />
      <button onClick={() => setIdFromButtonClick(id)}>Fetch Todo</button>
      <h4>{todo.title}</h4>
    </div>
  );
}

export default FetchData;
