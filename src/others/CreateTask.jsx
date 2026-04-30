import React from 'react'
import { useState } from 'react'
import FailedTask from '../components/TaskList/FailedTask'

const CreateTask = () => {
  const [taskTitle , setTaskTitle] = useState('')
  const [taskDate , setTaskDate] = useState('')
  const [taskAsign , setTaskAsign] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [newTask , setnewTask] = useState({})

  const submitHandler =(e)=>{
    e.preventDefault()
    setnewTask({taskTitle ,taskDate , category, taskDescription ,active:false, newTask:true ,completed:false , failed:false})

    const data = JSON.parse(localStorage.getItem('employees'))
    
    data.forEach((elem)=>{
      console.log(elem);
      if (taskAsign == elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask+1
        
        
      }
      localStorage.setItem('employees',JSON.stringify(data))
      

    })
    


    setTaskAsign('')
    setCategory('')
    setTaskTitle('')
    setTaskDate('')
    setTaskDescription('')
    
    
    

  }
  return (
    <div>
      <div className='lg:h-full h-[80vh] mt-6 bg-[#1c1c1c] p-5 w-full rounded-md '>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex lg:justify-between flex-wrap  '>
           <div className='lg:w-1/2 w-full'>
             <div>
                <h2 className='pl-1 text-lg'>Task Title</h2>
                <input 
                 value={taskTitle}
                 onChange={(e)=>{
                  setTaskTitle(e.target.value);
                  
                 }}
                 className='border-gray-400 rounded-lg px-2 py-2 lg:w-4/5 w-full text-sm bg-transparent outline-none border-[1.5px]' type="text" placeholder='Make a UI design' />
            </div>
            <div>
                <h2 className='pl-1 text-lg  mt-1'>Date</h2>
                <input
                 value={taskDate}
                 onChange={(e)=>{
                  setTaskDate(e.target.value);
                  
                 }}
                 className='border-gray-400 border-[1.5px] bg-transparent rounded-lg px-2 py-2 lg:w-4/5 w-full  text-sm outline-none'  type="date" />
            </div>
            <div>
                <h2 className='pl-1 text-lg  mt-1'>Asign to</h2>
                <input
                 value={taskAsign}
                 onChange={(e)=>{
                  setTaskAsign(e.target.value);
                  
                 }}
                  className='border-gray-400 border-[1.5px] bg-transparent rounded-lg px-2 py-2 lg:w-4/5 w-full  text-sm outline-none' type="text" placeholder='Employee name'/>
            </div>
            <div>
                <h2 className='pl-1 text-lg mt-1'>Category</h2>
                <input 
                 value={category}
                 onChange={(e)=>{
                  setCategory(e.target.value);
                  
                 }}
                 className='border-gray-400 border-[1.5px] bg-transparent rounded-lg px-2 py-2 lg:w-4/5 w-full  text-sm  outline-none' type="text" placeholder='Design, dev, etc' />
            </div>
           </div>
           <div className='lg:w-2/5 w-full h-44'>
            <div>
                <h2 className='text-lg'>Description</h2>
                <textarea
                 value={taskDescription}
                 onChange={(e)=>{
                  setTaskDescription(e.target.value);
                  
                 }} id='textarea' className='border-gray-400 border-[1.5px] bg-transparent rounded-lg p-2 outline-none w-full lg:h-52 h-[20vh]'></textarea>
            </div>
            <div>
                <button className='bg-[#408A71]  w-full p-2 rounded-lg'>Create Task</button>
            </div>
           </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
