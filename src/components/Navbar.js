import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Helal from './Helal.jpg';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark text-white sticky-top navbar-expand p-2">
            <NavLink to="/" className="ms-5 navbar-brand" style={{fontSize:"35px"}}>
                Play<span>Folio</span>
            </NavLink>
            <ul className="navbar-nav d-flex ms-auto order-5 me-5">
                <li className="nav-item ms-2">
                    <NavLink to="/library" className="nav-link" style={{fontSize:"26px"}}>
                        <i className="bi bi-box2-heart-fill"></i>
                    </NavLink>
                </li>
                <li className="nav-item m-2 mt-2 ms-4">
                    <Link to="https://solo.to/h4zemhel4l" >
                        <img src={Helal} alt=''/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
