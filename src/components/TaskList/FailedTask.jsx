import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
        <div id='tasklistPara' className='flex-shrink-0 bg-[#DC2626]  h-full w-[300px] rounded-2xl px-3 py-4 overflow-auto'>
            <div className='flex justify-between items-start'>
                <h2 className='bg-[#F87171] px-3 py-1 rounded-lg text-lg font-medium'>{data.category}</h2>
                <h2 className='text-lg font-medium'>{data.taskDate}</h2>
            </div>
            <h2 className='text-2xl font-bold mt-4'>{data.taskTitle}</h2>
            <p className='text-lg mt-2'>{data.taskDescription}</p>

            

        </div>
    </div>
  )
}

export default FailedTask
