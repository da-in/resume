import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;

const TEXT = ['가나다라마바사아자차카타파하', 'Choi Da-in', '崔多仁', 'Айсулу'];

function Title() {
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const index = useRef(0);

    useEffect(() => {
        let target = TEXT[index.current];
        const loop = setInterval(() => {
            setTitle((Text) => {
                let updated = Text;
                updated = Text + target[count];
                return updated;
            });
            setCount(count + 1);
        }, 150);
        count === target.length && clearInterval(loop);
        return () => {
            clearInterval(loop);
        };
    });
    return <TitleDiv>{title}</TitleDiv>;
}

export default Title;
