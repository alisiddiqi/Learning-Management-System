import React, { useState } from "react";
import "./AdminHome.css";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export default function Home() {
//   Handle onSubmit for Admin Login and give all MediaKeySystemAccess, rest is the same as Login
    const [sidebar, setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
    const SidebarData =[
        {
            title: 'Home',
            path: './adminhome',
            cName: 'nav-text'
        },
        {
            title: 'Students',
            path: './admin/student',
            cName: 'nav-text'
        },
        {
            title: 'Instructors',
            path: './admin/instructor',
            cName: 'nav-text'
        },
    ]
  return (
      <>
    <div className="AdminHome">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <h2 style={{paddingLeft: 15, paddingTop: 7}}>
            Admin Home Page
        </h2>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className ='nav-menu-items'>
            <li className="nav-bar-toggle">
                <Link to="#" className='menu-bars' onClick={showSidebar} style={{color: '#1d1b1b'}}> 
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
        {SidebarData.map((item,index)=>{
            return (
                <li key={index} className ={item.cName}>
                <Link to ={item.path}>
                <span>{item.title} </span>
                </Link>
                </li>
            );
        })}
        </ul>
    </nav>
    <br>
    </br>
    <p style={{textAlign: 'center'}}>
        This is the admin head page. The admin can change student and instructor profiles. The admin would ususlly be the head of the Institution
        and would have the power to change/assign courses to students and instructors.
    </p>
    </>
  );
}   