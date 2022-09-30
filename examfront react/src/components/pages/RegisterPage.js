import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import '../../App.css'
import Footer from './footer'

export default function SignUpPage() {

    return (
        <>
        <Navbar />
        <div class="text-center m-5-auto ">
        <Link to="/">
            <h1 class="font-bold text-center text-3xl">Register Here </h1>
            
            </Link>
            <form action="/home" class ="bg-slate-50 shadow-xl rounded-lg border-zinc-400 w-96 border-2"   >
                <p  >
                    <label>Username</label><br/>
                    <div class="rounded-lg  shadow-xl  border-zinc-400  border-2 my-1 ">
                    <input type="text" name="first_name" placeholder='UserName' required />
                    </div>
                    
                </p>
                <p  >
                    <label>Email address</label><br/>
                    <div class="rounded-lg  shadow-xl  border-zinc-400  border-2 my-1 ">
                    <input type="email" name="email" placeholder='Email address' required />                    </div>
                    
                </p>
                <p  >
                    <label>Password</label><br/>
                    <div class="rounded-lg  shadow-xl  border-zinc-400  border-2 my-1 ">
                    <input type="password" name="password" placeholder='Password' requiredc />
                    </div>
                    
                </p>
                <p  >
                    <label>First Name</label><br/>
                    <div class="rounded-lg  shadow-xl  border-zinc-400  border-2 my-1 ">
                    <input type="password" name="password" placeholder='eg. Mugesh' requiredc />
                    </div>
                    
                </p>
                <p  >
                    <label>Last Name</label><br/>
                    <div class="rounded-lg  shadow-xl  border-zinc-400  border-2 my-1 ">
                    <input type="password" name="password" placeholder='eg. rao' requiredc />
                    </div>
                    
                </p>
                <p  >
                    <label>Phone number</label><br/>
                    <div class="rounded-lg  shadow-xl  border-zinc-400  border-2 my-1 ">
                    <input type="password" name="password" placeholder='Phone' requiredc />
                    </div>
                    
                </p>
                <div class="flex  py-5">
                <p class="mx-3 "> 
                <div >

                </div>
                    <button id="sub_btn" type="submit" class="p-6 m-7 " >Register</button>
                </p>
                <p class="mx-6 ">
                    
                    <Link to="/register">
                <button id="sub_btn" type="reset"  class="bg-red-600 drop-shadow-2xl  text-white font-semibold p-6 m-7 rounded">Reset</button>

                </Link>
                </p>
                
                </div>
            </form>
            
            
        </div>
        <Footer/>
        </>
    )

}
