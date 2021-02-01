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
            {auth.isLoggedIn && auth.userType === 'ong' && (
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
            {auth.isLoggedIn && auth.userImage && (
                <li>
                    <img
                        src={
                            'http://localhost:5000/' +
                            auth.userImage.replaceAll('\\', '/')
                        }
                        className="nav-links__user-image"
                        alt="userImage"
                    />
                </li>
            )}
        </ul>
    );
};

export default NavLinks;
