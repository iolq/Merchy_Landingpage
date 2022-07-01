import React, { useState } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import Dropdown from './dropdown.js';
import styled from 'styled-components';

const Logo = styled.img`
  width: 15%;
`

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <div>
                    <Link to='/' onClick={closeMobileMenu}>
                        <Logo src='\assets\White Logo.png'></Logo>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            What can we do?
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Partners <i className='fas fa-caret-down' />
                        </Link>

                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Merchant
                        </Link>
                    </li>

                    <li>
                        <button>en</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;