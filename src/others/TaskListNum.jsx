import React from 'react'

const TaskListNum = ({data}) => {
  // console.log(data);
  
  return (
    <div className='screen lg-pt-10 pt-5 flex gap-6'>
      <div className='bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] w-1/4  lg-h-28 h-36 rounded-xl px-5  py-1  '>
        <h2 className='text-5xl font-semibold pt-1'>{data.taskCounts.active}</h2>
        <h3 className='text-3xl font-semibold pt-1'>Active Task</h3>
        </div>
         <div className='bg-gradient-to-r from-[#16A34A] to-[#059669] w-1/4 lg-h-28 h-36 rounded-xl px-5   py-1  '>
        <h2 className='text-5xl font-semibold pt-1'>{data.taskCounts.completed}</h2>
        <h3 className='text-3xl font-semibold pt-1'>Completed Task</h3>
        </div>
         <div className='bg-gradient-to-r from-[#F59E0B] to-[#D97706] w-1/4 lg-h-28 h-36h-28 rounded-xl px-5  py-1  '>
        <h2 className='text-5xl font-semibold pt-1'>{data.taskCounts.newTask}</h2>
        <h3 className='text-3xl font-semibold pt-1'>New Task</h3>
        </div>
         <div className='bg-gradient-to-r from-[#DC2626] to-[#B91C1C] w-1/4  lg-h-28 h-36  rounded-xl px-5 py-1  '>
        <h2 className='text-5xl font-semibold pt-1'>{data.taskCounts.failed}</h2>
        <h3 className='text-3xl font-semibold pt-1'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNum
