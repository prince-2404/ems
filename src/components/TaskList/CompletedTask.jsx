import React from 'react'

const CompletedTask = ({data}) => {
  return (
    <div>
       <div id='tasklistPara' className='flex-shrink-0 bg-[#047857] h-full w-[300px] rounded-2xl px-3 py-4 overflow-auto '>
            <div className='flex justify-between items-start'>
                <h2 className='bg-[#22C55E] px-3 py-1 rounded-lg text-lg font-medium'>{data.category}</h2>
                <h2 className='text-lg font-medium'>{data.taskDate}</h2>
                
            </div>
              <div className='items-center justify-start '>
                <h2 className='text-2xl font-bold mt-4'>{data.  taskTitle}</h2>
            <p className='text-lg mt-2'>{data.taskDescription}</p>

          
            <div className='pt-4'>
                <button className='bg-[#16A34A] p-1 rounded-lg font-semibold w-full'>Completed</button>
            </div>
              </div>

        </div>
    </div>
  )
}

export default CompletedTask
