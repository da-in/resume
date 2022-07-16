import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    color: red;
`;

function Title() {
    return (
        <>
            <StyledDiv>title</StyledDiv>
        </>
    );
}

export default Title;
