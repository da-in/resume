import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.title};
    height: 50px;
`;

const TEXT = ['최다인 ', 'Choi Da-in ', '崔多仁 ', 'Айсулу '];

function TypeTitle() {
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
        }, 300);
        const next = () => {
            clearInterval(loop);
            setTitle('');
            setCount(0);
            index.current = (index.current + 1) % 4;
        };
        count === target.length && next();
        return () => {
            clearInterval(loop);
        };
    });
    return <TitleDiv>{title}</TitleDiv>;
}

export default TypeTitle;
