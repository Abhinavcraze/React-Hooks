import React,{useContext} from 'react'
import { UserContext , ChannelContext} from '../../App.jsx'
  
function ComponentF() {
  const user = useContext(UserContext)
  return (
    <div>
      <h2>Method 1</h2>
      {user}

      <h2>Method 2</h2>
      <UserContext.Consumer>
        {
          user => <div>{user}</div>
        }
      </UserContext.Consumer>


      <h2>Method 3</h2>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => <div>User Context Value {user} , Channel Context Value {channel}</div>
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>

    </div>
  )
}
export default ComponentF