import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    TODOS OS ANIMAIS
                </NavLink>
            </li>
            <li>
                <NavLink to="/meusanimais">MEUS ANIMAIS</NavLink>
            </li>
            <li>
                <NavLink to="/animal/novo">NOVO ANIMAL</NavLink>
            </li>
            <li>
                <NavLink to="/auth">LOGIN</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
