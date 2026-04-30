import React from 'react'

const AcceptedTask = ({data}) => {
    // console.log(data);
    
  return (
    <div>
       <div id='tasklistPara' className='flex-shrink-0 bg-[#1E40AF] h-full w-[300px] rounded-2xl px-3 py-4 overflow-auto'>
            <div className='flex justify-between items-start'>
                <h2 className='bg-[#3B82F6] px-3 py-1 rounded-lg text-lg font-medium'>{data.category}</h2>
                <h2 className='text-lg font-medium'>{data.taskDate}</h2>
            </div>
            <h2 className='text-2xl font-bold mt-4'>{data.taskTitle}</h2>
            <p className='text-lg mt-2'>{data.taskDescription} </p>
            
            <div className='pt-4 gap-2'>
            <button className='bg-[#16A34A] font-semibold p-1 mr-2 rounded-lg '>Mark as Complted</button>
            <button className='bg-[#DC2626] font-semibold p-1 mr-2 rounded-lg'>Mark as Failed</button>

        </div>

        </div>
      
    </div>
  )
}

export default AcceptedTask
