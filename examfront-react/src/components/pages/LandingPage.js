import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'

import '../../App.css'


export default function LandingPage() {
    return (
        <>
        <Link to="/home">
        <Navbar />
        </Link> 
        <div class="justify-center  py-8" >
            <h1 class="text-center font-bold text-4xl py-7">Stellar Exam </h1>
            <p class="text-center font-semibold text-3xl">A Exam portal</p>
            <div class="text-center py-9 my-32">
                <Link to="/login">
                    <button class="bg-teal-300  font-bold drop-shadow-2xl text-white py-2 px-8 mx-8 border-red-500 rounded">Log in</button>
                </Link>
                <Link to="/register">
                <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">Sign Up</button>

                </Link>
            </div>
        </div>    
        
        <Footer  />
       </>
    )
}



