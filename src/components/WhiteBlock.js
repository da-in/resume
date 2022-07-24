import React from 'react';
import styled from 'styled-components';

const WhiteDiv = styled.div`
    width: 100%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

function WhiteBlock({ children }) {
    return <WhiteDiv>{children}</WhiteDiv>;
}

export default WhiteBlock;
