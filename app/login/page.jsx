"use client"

import React, { useContext, useState } from 'react'
import data from '../../data.json'
import { useRouter } from 'next/navigation'
import { MyContext } from '@/components/Context'

const Login = () => {
    const {loginHandler} = useContext(MyContext)
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (event)=>{
        event.preventDefault();
        console.log("email", email);
        console.log("password", password)

        const user = data.filter((d)=> d.email===email)

        if(user.length===0) {
            alert("No user found!")
            return
        }
        if(user && user[0].password===password){
            loginHandler(user[0])
            router.push('/dashboard');
        }else{
            alert("Incorrect Password")
            return
        }

    }

  return (
    <div className='login'>
        <form onSubmit={submitHandler} className='form'>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="a" placeholder='Enter Email' />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="b" placeholder='Enter Password' />
            <button type='submit' className='form_btn'>Submit</button>
        </form>
    </div>
  )
}

export default Login