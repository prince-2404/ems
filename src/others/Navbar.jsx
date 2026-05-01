import React from 'react'

const Navbar = (props) => {

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser' ,'')
    // window.location.reload()
    props.changeUser('')
    
  }
  
  return (
    <div className='flex justify-between items-start'>
      <h2 className='text-3xl'>Hello, <br /> <span className='font-semibold text-5xl'> {props.data?.firstName || 'Admin'}</span></h2>
      <button onClick={logOutUser} className='bg-red-600 border-none rounded-md px-3 py-1 items-center font-semibold text-xl pb-2'>Log Out</button>
    </div>
  )
}

export default Navbar
