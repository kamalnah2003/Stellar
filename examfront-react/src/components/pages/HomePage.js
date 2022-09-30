import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import Navbar from './navbar'

export default function HomePage() {
    return (
     <>
     <Link to="/home">
     <Navbar />
     </Link> 
     <div class="justify-center  py-8" >
         <h1 class="text-center font-bold text-4xl py-7">Welcome To Stellar Acadamey  </h1>
         
         
         <div class="text-center py-9 my-36">
             
             <Link to="/register">
             <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">Go In </button>

             </Link>
         </div>
     </div>    
     
     <Footer  />
    </>
    
    )
}

