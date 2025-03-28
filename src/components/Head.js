import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { setRegion } from '../utils/regionSlice';



const Head = () => {
  const dispatch = useDispatch();

  const selectedRegion = useSelector(store=> store.region.selectedRegion);

  // const isProfileOpen = useSelector(store => store.profile.profileToggle);

  const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
  };

  const handleRegion = (event) => {
    dispatch(setRegion(event.target.value));

  };


  return (
    <div className='grid grid-flow-col p-6 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img alt='menu'
            // onClick={() => toggleMenuHandler()}
            className='h-8 cursor-pointer'
            src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'
            />
            <a href='/'>
             <img alt='youtube-logo'
             className='h-8 mx-2'
             src='https://1000logos.net/wp-content/uploads/2017/02/YouTube-Logosu.png'
            />
            </a>
        </div>

        <div className="flex col-span-9 items-center border border-gray-300 rounded-full px-4 shadow-sm">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow outline-none text-gray-700 bg-transparent px-2"
                />
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-r-full">
                    🔍
                </button>
        </div>

        <div className="pl-2 col-span-1 py-2">
                <select  
                value={selectedRegion} 
                onChange={handleRegion}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="US">🇺🇸 United States</option>
                  <option value="IN">🇮🇳 India</option>
                </select>
        </div>


       <div className='flex col-span-1 justify-end'>
       <a href='/'>
        <img alt='user-logo'
         className="flex h-12"
        //  onClick={()=> dispatch(setProfileToggle())}
          src='https://www.iconpacks.net/icons/2/free-icon-user-3296.png' 
          />
        </a>
   <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200">
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🔑 Login</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🔄 Change Password</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">👤 Profile</li>
          </ul>
        </div>
       </div>
     
    </div>
  )
}

export default Head;

