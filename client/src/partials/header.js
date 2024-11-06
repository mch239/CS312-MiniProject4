import React from 'react'

function Header() {
  return (
    <div>
        <header className="header">
            <div className="site-name">
                <h1>Mini Blog Project</h1>
            </div>
            <div>
                <nav className="navigation">
                    <ul className="nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/blogs">View Blogs</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header;