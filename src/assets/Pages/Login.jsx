import React from 'react'
const Login = () => {
  return (
    <div>
        <div>
            <h1 className='text-center text-4xl font-bold mt-10'>Login</h1>
            <div className='flex justify-center mt-8'>
                <form className='border rounded-lg w-96 p-2 m-1 shadow'>
                    <label htmlFor="username" className='font-bold'>Username:</label>
                    <input placeholder='Enter username' type="text" id="username" name="username" className='border rounded-md w-full p-2' required/>
                    <label htmlFor="password" className='font-bold'>Password:</label>
                    <input placeholder='Enter password' type="password" id="password" name="password" className='border rounded-md w-full p-2' required/>
                    <button type="submit" className='bg-red-500 text-white rounded-md px-4 py-2 mt-4'>Login</button>
                    <p className='text-center mt-4'>Don't have a account? <a href='#' className='hover:text-blue-600'>Signup</a></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login