import React from 'react'
import Button from './Button'


const buttonList = ["All", "Live", "Gaming", "Songs","Cricket","Prodcast","Web Series", "1920", "Dubbing", "Jukebox","Thrillers", "Mixed"]
const ButtonList = () => {
  return (
    <div className='flex space-x-2'>
     {buttonList.map((item, index) => (<div><Button key={index} name={item}></Button></div>))}
    </div>
  )
}

export default ButtonList