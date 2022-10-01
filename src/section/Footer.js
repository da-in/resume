import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    padding: 20px 0px 60px 0px;
`;

function Footer() {
    return (
        <FooterContainer>
            <p>DAIN PORTFOLIO</p>
            <p>
                © 2022 dain. all rights reserved. Please contact
                <br />
                talown@naver.com
            </p>
        </FooterContainer>
    );
}

export default Footer;
