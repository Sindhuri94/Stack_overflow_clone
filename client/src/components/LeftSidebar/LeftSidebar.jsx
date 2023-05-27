import React from "react";
import {NavLink} from 'react-router-dom'
import './LeftSidebar.css'
const LeftSidebar=()=>{
    return(
        <div className="left-sidebar">
            <nav className="side-nav">
              <NavLink to='/' className='side-nav-links' activeClassName='active' style={{paddingLeft:'5px'}}>
                <p>Home</p>
              </NavLink>
              <div className="side-nav-div"></div>
               <div><p>PUBLIC</p></div>
               <NavLink to='/Questions' className={'side-nav-links'}>
                 <p style={{paddingLeft:"5px"}}>Questions</p>
               </NavLink>
               <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'5px'}}>
                <p>Tags</p>
              </NavLink>
              <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:'5px'}}>
                <p>Users</p>
              </NavLink>
            </nav>
        </div>
    )
}
export default LeftSidebar