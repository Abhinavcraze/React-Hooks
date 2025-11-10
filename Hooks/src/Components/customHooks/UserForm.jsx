import useInput from '../customHooks/useInput.jsx'

function UserForm() {
  // const [firstName , setFirstName] = React.useState('')
  // const [lastName , setLastName] = React.useState('')

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

const submitHandler = e =>{
  e.preventDefault()
  alert(`Hello ${firstName} ${lastName}`)
  resetFirstName()
  resetLastName()
}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name : </label>
          <input type="text" {...bindFirstName} style={{backgroundColor: 'white', color: 'navy'}} />
        </div>

        <div>
          <label>Last Name : </label>
          <input type="text" {...bindLastName} style={{backgroundColor: 'white', color: 'navy'}} />
        </div>
        <button type="submit">Submit</button>
        <h2>Your First Name is : {firstName}</h2>
        <h2>Your Last Name is : {lastName}</h2>
      </form>
    </div>
  )
}

export default UserForm