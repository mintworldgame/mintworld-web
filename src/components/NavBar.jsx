import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid px-5">
                <a href="" className="navbar-brand">
                    <img src="./logo-32x32.png" alt="" />
                </a>
                <button
                    className="navbar-toggler bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <AiOutlineMenu color="#fff" size={30} />{' '}
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fw-bold">
                        <li className="nav-item ">
                            <Link to="info" smooth={true} duration={500} className="nav-link active" style={{ color: '#98ff98', cursor: 'pointer' }}>
                                Monsters
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" smooth={true} duration={500} className="nav-link " style={{ color: '#98ff98', cursor: 'pointer' }}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="play" smooth={true} duration={500} className="nav-link" style={{ color: '#98ff98', cursor: 'pointer' }}>
                                Play
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="community" smooth={true} duration={500} className="nav-link" style={{ color: '#98ff98', cursor: 'pointer' }}>
                                Community
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
