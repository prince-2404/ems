import React, { useState } from "react";

const Login = ({HandleLogin}) => {
  // console.log(HandleLogin);
  

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const submiteHandler = (e) =>{
        e.preventDefault()
        HandleLogin(email , password)
        setEmail('')
        setPassword('')
        
        
       
        

    }
  return (
   <div>
     <div className="min-h-screen min-w-full flex justify-center items-center bg-[#091413] overflow-hidden">
      <div className=" border-[#b6efda] border-4 flex  p-[10vw] rounded-2xl justify-center items-center">
        <form onSubmit={(e)=>{
            submiteHandler(e)
        }} className="flex-col flex gap-6 justify-center items-center">
        
          <input
            required
            className="text-white outline-none border-[#408A71] border-2 rounded-full py-3 px-6 bg-transparent"
            type="email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
                
            }}
            placeholder="Enter your Email"
          />
          <input
          required
          className="text-white outline-none border-[#408A71] border-2 rounded-full py-3 px-6  bg-transparent"
           type="password"
           value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
                
            }}
           placeholder="Enter your Password" />
          <button  className="text-white outline-none border-none bg-[#408A71] rounded-full py-3 w-full font-semibold flex justify-center items-center">Login</button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Login;
