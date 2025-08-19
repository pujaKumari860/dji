import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
      <div className='mx-6 my-4 flex'>
       <img src={logo} alt='logo'></img>
       <nav className=''>
        <a href='' className='text-lg px-5 hover:text-gray-600'>Home</a>
        <a href='' className='text-lg px-5 hover:text-gray-600'>Explore products</a>
        <a href='' className='text-lg px-5 hover:text-gray-600'>Services</a>
        <a href='' className='text-lg px-5 hover:text-gray-600'>Who we are</a>
        <a href='' className='text-lg px-5 hover:text-gray-600'>Contact</a>
       </nav>
        <div className='mx-6 flex'>
          <a href=''><img src='images/search.png' alt='search-icon'></img></a>
          <a href=''><img src='images/user.png' alt='login'></img></a>
          <div className='bg-gray-700 p-2 flex rounded-xl text-white '><img src='images/shopping-bag.png' alt='cart' className='w-5 h-5 mr-3'></img>Shop</div>
        </div>
       </div>
    </>
  )
}

export default Header
