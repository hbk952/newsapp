import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    // const[searchKeyword,setSearchKeyword] = useState('');
    // const handleOnChange=(event)=>{
    //     setSearchKeyword(event.target.value)
    //     console.log(event.target.value)
    // }

    // const handleOnClick=()=>{
    //     console.log(searchKeyword)
    // }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <div className="logo" style={{height:'80px', width:'120px', paddingRight:'30px'}}>
                <Link className="navbar-brand" to="/"><h2><img  style={{height:'80px'}} src="data:image/jpeg;base64,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" alt="News.com" ></img></h2></Link>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginTop:'42px'}}>
                    <ul className="navbar-nav mr-auto" style={{gap:'20px'}}>
                    <li className="nav-item active" style={{fontSize:'20px'}}>
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item active" style={{fontSize:'20px'}}>
                        <Link className="nav-link" to="/subscription">Subscription</Link>
                    </li>
                    <li className="nav-item" style={{fontSize:'20px'}}>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item" style={{fontSize:'20px'}}>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar