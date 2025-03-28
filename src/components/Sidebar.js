import React from 'react'
import { FaBeer } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);


  // Early pattern coding pratices
  if(!isMenuOpen) return null;
  return (
    <div className='shadow-lg p-5 w-48'>
      <ul>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>

      <h1 className='font-bold'>Subscriptions</h1> 
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>

    </div>
  )
}

export default Sidebar;

// import React from "react";
// import { FaTimes } from "react-icons/fa";
// import { MdDashboardCustomize, MdSettings, MdHelp, MdReport } from "react-icons/md";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const menuItems = [
//     { name: "Dashboard", icon: <MdDashboardCustomize />, link: "#" },
//     { name: "Reports", icon: <MdReport />, link: "#" },
//     { name: "Settings", icon: <MdSettings />, link: "#" },
//     { name: "Help", icon: <MdHelp />, link: "#" },
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transition-transform duration-300 ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       {/* Sidebar Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-700">
//         <div className="flex items-center space-x-2">
//           <img
//             className="h-8"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLemsCeiN5xM-AMN94HBlWNNofpDy2_1Zxpg&s"
//             alt="dashboard-icon"
//           />
//           <span className="uppercase text-lg font-semibold">Dashboard</span>
//         </div>
//         <button onClick={toggleSidebar} className="text-xl focus:outline-none">
//           <FaTimes />
//         </button>
//       </div>

//       {/* Menu Items */}
//       <nav className="mt-4">
//         <ul className="space-y-2">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className="px-4 py-2 hover:bg-gray-700 rounded-md flex items-center space-x-2"
//             >
//               <span className="text-xl">{item.icon}</span>
//               <a href={item.link} className="text-white">
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

