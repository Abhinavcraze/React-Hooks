import React,{useState} from 'react'

function useStatewithObject() {
  const [name, setName] = useState({firstName: '', lastName: ''}) 

  return (
    <div>
      <form>
        <input type="text"
        placeholder="First Name"
        value={name.firstName}
        className="white-input"
        onChange={e => setName({...name, firstName: e.target.value})}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={name.lastName}
          className="white-input"
          onChange={e => setName({...name, lastName: e.target.value})}
        />
        <h2>Your name is {name.firstName} {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
      
    </div>
  )
}

export default useStatewithObject