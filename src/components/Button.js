import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-2'>
        <button className='py-1 m-2 w-full shadow-sm bg-gray-200 rounded-lg hover:bg-red-500'>{name}</button>
       
    </div>
  )
}

export default Button