import React from 'react'
import Navbar from '../../others/Navbar'
import CreateTask from '../../others/CreateTask'
import AllTasks from '../../others/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='p-6'>
      <Navbar changeUser ={props.changeUser}/>
      <CreateTask/>
      <AllTasks/>
    </div>
  )
}

export default AdminDashboard
