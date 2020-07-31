import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './MenuErro.css';
import Button from '../Button';


function MenuErro() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="JrFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/">
                Ir para home
            </Button>
        </nav>
    );
};

export default MenuErro;