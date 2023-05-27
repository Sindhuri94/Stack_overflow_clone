import React from "react";
import logo1 from '../../assets/logo1.png'
import search from '../../assets/search.png'
import Avatar from '../../components/Avatar/Avatar'
import {Link} from 'react-router-dom'
const Navbar =() =>{
    var user=null
    return(
        <nav className="main-nav">
        <div className="navbar">
             <Link to ='/' className="nav-item nav-logo">
                <img src={logo1} alt='logo1'/>
             </Link>
             <Link to ='/' className="nav-item nav-btn">About</Link>
             <Link to ='/' className="nav-item nav-btn">Products</Link>
             <Link to ='/' className="nav-item nav-btn">For Teams</Link>
            <form>
                <input type="text" placeholder="Search ..."/>
                <img src={search} alt ="search" width="18" className="search-icon"/>
            </form>
            {user===null ?
            <Link to ='/Auth' className="nav-item nav-links">Login</Link>:
            <>
            <Avatar backgroundColor='#009dff'px='10px' py='10px' borderRadius='50%' color='white'><Link to='/User' style={{color:'white',textDecoration:'none'}}>M</Link></Avatar>
            <button className="nav-item nav-links">Log Out</button>
            </>
            }
        </div>
        </nav>
    )
}
export default Navbar;



