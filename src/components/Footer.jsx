import React from 'react'

const Footer = () => {
  const date = <span> {new Date().getFullYear()} &copy; All Rights Reserved</span>
  return (
    <div className='h-[20px] flex justify-center'>{date}</div>
  )
}

export default Footer