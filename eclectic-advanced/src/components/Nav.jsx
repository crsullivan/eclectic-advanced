import React from 'react';
import '../Nav.css';

const Nav = () => {

    return (
        <div className="Nav">
            <h1><a href="http://localhost:3000">EclecticLogic</a></h1>
            <div className="navLinks">
                <a href="http://localhost:3000/contact">Contact</a>
                <a href="http://localhost:3000/about">About</a>
                <a href="https://eclectic-blog.vercel.app/">Blog</a>
            </div>
        </div>
    )

}

export default Nav;