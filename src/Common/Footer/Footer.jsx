import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-cont'>
      <p>&copy; {new Date().getFullYear()} Val's Portfolio. All rights reserved.</p>

      </div>
    </footer>
  )
}

export default Footer