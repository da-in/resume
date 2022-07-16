import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
`;

function Title() {
    const [title, setTitle] = useState(1);
    useEffect(() => {
        setInterval(() => {
            setTitle(title + 1);
        }, 1000);
    });
    return (
        <>
            <StyledDiv>{title}</StyledDiv>
        </>
    );
}

export default Title;
