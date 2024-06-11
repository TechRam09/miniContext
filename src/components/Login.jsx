/* eslint-disable no-unused-vars */
// Data storing to UserContext

import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)// setUser is the state/method in the userContext

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username);
        setUser({username,password})
    }

  return (
      <>
          <h2>Login</h2>
          <input type="text"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}    
          placeholder='Username' /><br /><br />
          <input type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}    
          placeholder='Password' /><br /><br />
          <button onClick={handleSubmit}>Submit</button><br />
          
      </>
  )
}

export default Login