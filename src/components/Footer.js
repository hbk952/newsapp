import React from 'react'

const Footer = () => {
    return (
      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()} <span>LiveNews.com</span>. Built@
          <a href="https://react.dev/">HarrySolutions</a>
        </p>
      </footer>
    )
  }

export default Footer