import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;

const TEXT = ['최다인', 'Choi Da-in', '崔多仁', 'Айсулу'];

function Title() {
    const [title, setTitle] = useState(0);
    const index = useRef(0);
    useEffect(() => {
        const loop = setInterval(() => {
            index.current += 1;
            setTitle(index.current);
            if (index.current === 10) {
                clearInterval(loop);
            }
        }, 1500);
    }, []);

    return (
        <>
            <TitleDiv>{TEXT[title % 4]}</TitleDiv>
        </>
    );
}

export default Title;
