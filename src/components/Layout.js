import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <div style={{position:'sticky',top:'0px',zIndex:1}}><Navbar /></div>
        {children}
        <div style={{background:'black',color:'white',position:'sticky',bottom:'0px',zIndex:'1'}}><Footer /> </div>
    </div>
  )
}

export default Layout