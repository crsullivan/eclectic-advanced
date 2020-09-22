import React from 'react';
import '../Nav.css';

const Nav = () => {

    return (
        <div className="Nav">
            <h1><a href="https://eclectic-logic.vercel.app/">EclecticLogic</a></h1>
            <div className="navLinks">
                <a href="https://eclectic-logic.vercel.app/contact">Contact</a>
                <a href="https://eclectic-logic.vercel.app/about">About</a>
                <a href="https://eclectic-blog.vercel.app/">Blog</a>
            </div>
        </div>
    )

}

export default Nav;