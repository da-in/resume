import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;

const TEXT = ['최다인', 'Choi Da-in', '崔多仁', 'Айсулу'];
// const SPEED = 100;
// let i = 0;

function Title() {
    const [title, setTitle] = useState('');
    // const wait = () => {};
    // const type = () => {};
    // const remove = () => {};
    useEffect(() => {
        setTitle(TEXT[2]);
        // await type();
        // await wait();
        // await remove();
        // await wait();
    }, []);

    return (
        <>
            <TitleDiv>{title}</TitleDiv>
        </>
    );
}

export default Title;
