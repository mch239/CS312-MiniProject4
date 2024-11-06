import React from 'react'

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div><footer className="footer">{currentYear} | Mini Blog Project</footer></div>
  )
}

export default Footer;

