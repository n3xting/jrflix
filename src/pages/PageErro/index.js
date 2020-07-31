import React from 'react';
import MenuErro from '../../components/MenuErro';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageErro({ children }){
    return(
        <>
            <MenuErro />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageErro;