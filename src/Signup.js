import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <h3>Sign-Up </h3>
    <form action="">
    <div className='mb-3'>
            <label htmlFor="name"><strong>Name </strong> </label>
            <input type='text' placeholder='enter your name' className='form-control '/>
        </div>
        <div className='mb-3'>
            <label htmlFor="email"><strong>Email </strong> </label>
            <input type='email' placeholder='enter your email' className='form-control '/>
        </div>
        <div className='mb-3'>
        <label htmlFor="email"><strong>Password </strong></label>
        <input type='password' placeholder='enter your password' className='form-control '/>
    </div>
    <button className='btn btn-success w-100'>Sign Up</button>
    <Link to={'/'} className='btn btn-default border w-100 bg-light'>Login </Link>
    </form>
    </div>
    </div>
  )
}

export default Signup