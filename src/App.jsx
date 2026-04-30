import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import Navbar from './others/Navbar'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import {AuthContext} from './context/AuthProvider'

function App() {
 const [user , setUser] = useState('')
 const [loggedInUserData , setLoggedInUserData] = useState(null)


 

  

  const authData = useContext(AuthContext)
  // console.log(authData);
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    // console.log(loggedInUser);
    
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)

      // console.log(userData);
       setUser(userData.role)
       setLoggedInUserData(userData.data)
      //  console.log(loggedInUserData);
       
    
      
    }

  },[])

  const HandleLogin =(email , password)=>{
    if (email == 'admin@12' && password == 123) {
     setUser('admin')
     localStorage.setItem('loggedInUser',JSON.stringify({role :'admin'}))
     
      
    }else if (authData){
      const employee = authData.employees.find((e)=> email == e.email && password == e.password)
      // console.log(authData);
      
      
      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee', data :employee}))
        // console.log(employee);
        
        
      }
    } else  {
      alert('Invaild user')
    }
  }


  

  return (
    <div>
      {!user ? <Login HandleLogin={HandleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser ={setUser}/> : (user == 'employee' ?  <EmployeeDashboard changeUser ={setUser} data = {loggedInUserData}/> :null ) }
      
      
    </div>
  )
}

export default App
