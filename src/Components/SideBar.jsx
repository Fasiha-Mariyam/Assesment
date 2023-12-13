import React, { useState } from 'react';
import { IoReorderThreeSharp } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const myStyle = { backgroundColor: '#927cef', color: "white" };
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const NavItems = [
    {
      tab: "UserForm",
      url: "/",
      icon: <FaWpforms size={20} color='grey' />
    },
    {
      tab: "User Table",
      url: "/usertable",
      icon: <CiViewTable size={20} color='grey' />
    },
  ];

  return (
    <>
      <div className="p-3 d-flex text-secondary justify-content-between align-items-center fw-bold">
        <IoReorderThreeSharp size={50} color='grey' onClick={toggleSidebar} />
      </div>
      <ul className={`nav flex-column pt-3 ${isSidebarOpen ? 'open' : ''}`}>
        {
          NavItems.map((val, key) =>
            <li key={key} className={`nav-item m-2 ${location.pathname === val.url ? 'rounded fw-bold' : null}`}
              style={location.pathname === val.url ? myStyle : null}>
              <Link className='nav-link d-flex align-items-center  text-secondary  gap-2' to={val.url}>
                <span>{val.icon}</span>
                <span>{val.tab}</span>
              </Link>
            </li>)
        }
      </ul>
    </>
  );
}

export default SideBar;
