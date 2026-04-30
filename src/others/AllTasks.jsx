import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTasks = () => {
  const authData = useContext(AuthContext)
  
  
  return (
    <div id='allTasks' className='bg-[#1c1c1c] p-4 mt-4 rounded-lg h-full w-full '>
      <div className='bg-[#408A71] flex justify-between items-center py-2 px-4 rounded-md font-medium mb-2 w-full'>
        <h2 className='w-1/5' >Employee Name</h2>
        <h3 className='w-1/5'>Active Task</h3>
        <h3 className='w-1/5'>Completed</h3>
        <h3 className='w-1/5'>NewTask</h3>
        <h3 className='w-1/5'>Failed</h3>
      </div>
      <div>
        {authData.employees.map((elem ,idx)=>{
          return   <div key={idx} className='border-[#408A71] border-2 flex items-center py-2 px-4 rounded-md font-medium mb-2 w-full '>
        <h2 className='w-1/5 text-white font-medium '>{elem.firstName}</h2>
        <h3 className='w-1/5 '>{elem.taskCounts.active}</h3>
        <h3 className='w-1/5 text-white'>{elem.taskCounts.completed}</h3>
        <h3 className='w-1/5'>{elem.taskCounts.newTask}</h3>
        <h3 className='w-1/5'>{elem.taskCounts.failed}</h3>
      </div>
        })}
      </div>
    </div>
  )
}

export default AllTasks
