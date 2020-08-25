import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = (props) => {
    const auth = useContext(AuthContext);
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    TODOS OS ANIMAIS
                </NavLink>
            </li>
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/meusanimais">MEUS ANIMAIS</NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/animal/novo">NOVO ANIMAL</NavLink>
                </li>
            )}
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/auth">LOGIN</NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout}>LOGOUT</button>
                </li>
            )}
        </ul>
    );
};

export default NavLinks;
