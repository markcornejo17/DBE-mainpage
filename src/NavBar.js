import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="navbar">
        <div className="container-fluid">
            <img src="./dolphin-logo.jpeg" alt="" width="60" height="50" className="logo"/>
            <a className="navbar-brand" href="#">Blue Dolphin Engagement</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav flex-wrap ms-md-auto">

                    <li><a className="nav-link" href="#"> SIGN UP</a></li>
                    <li><a className="nav-link" href="#"> LOGIN </a></li>
                    <li><a className="nav-link" href="#"> EMPLOYEE LIST </a></li>
                </ul>

            </div>
        </div>
    </nav>
    )
}

export default Navbar;
