import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageErro from '../../pages/PageErro';
import yoda from '../../assets/img/yoda.jpg';
import '../pages.css';


function Pagina404() {
    return (
        <PageErro>
        <h1>ERROR 404</h1>

        <img className="Yoda" src={yoda} alt="YoDa" />
        
        <h3>tá vacilando ai 4head</h3>
        </PageErro>
    )
  }

  export default Pagina404;