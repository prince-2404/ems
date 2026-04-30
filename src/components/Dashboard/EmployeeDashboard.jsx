import React from 'react'
import Navbar from '../../others/Navbar'
import TaskListNum from '../../others/TaskListNum'
import TaskList from '../TaskList/TaskList'
import AllTasks from '../../others/AllTasks'

const EmployeeDashboard = (props) => {
  // console.log(data);
  
  return (
    <div className='bg-[#0B1220] h-screen p-6'>
      <Navbar changeUser = {props.changeUser} data = {props.data}/>
      <TaskListNum data = {props.data}/>
      <TaskList data ={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
