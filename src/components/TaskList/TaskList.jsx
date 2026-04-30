import React from 'react'
import AcceptedTask from './AcceptedTask'
import CompletedTask from './CompletedTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data.newTask);
  
  return (
    <div className='screen'>
      <div id='taskList' className='h-[45vh] justify-start w-full  mt-10 flex gap-4 overflow-auto'>
      
          {data.tasks.map((elem ,idx)=>{
            if (elem.active) {
                return <AcceptedTask key={idx} data={elem}/>
            }
            if (elem.newTask) {
                return <NewTask key={idx} data={elem}/>
            }
            if (elem.completed) {
                return <CompletedTask key={idx} data={elem}/>
            }
            if (elem.failed) {
                return <FailedTask key={idx} data={elem}/>
            }
        })}
      
       
        
      </div>
    </div>
  )
}

export default TaskList
