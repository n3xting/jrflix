import React from 'react';
import Logo from '../../../src/assets/img/Logo.png';
import './Footer.css';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo JrFlix" />
      </a>
      <p>
        © 2020 | <a href="github.com/n3xting"> n3xting</a>. Desenvolvido durante a quarentena
      </p>
    </FooterBase>
  );
}

export default Footer;
