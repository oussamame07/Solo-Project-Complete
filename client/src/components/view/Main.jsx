import React,{useState} from 'react'
// import Login from '../Login';
// import Register from '../Register';
import SignIn from '../demo';
import SignUp from '../demosignup';

export default function Main() {
    const [users,setUsers]=useState([]);
  return (
    <div>
        <SignIn
        users={users}
        setUsers={setUsers}/>
        <SignUp 
        users={users}
        setUsers={setUsers}/>
    </div>
  )
}
