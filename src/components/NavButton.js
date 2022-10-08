import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MdWest } from 'react-icons/md';

const NavButtonBlock = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    gap: 10px;
`;

const NavButton = forwardRef((props, scrollRef) => {
    const isCurrent = props.index === Math.min(...props.cur);
    return (
        <NavButtonBlock
            onClick={() =>
                scrollRef.current[props.index].scrollIntoView({
                    behavior: 'smooth',
                })
            }
        >
            <p
                className="handwriting"
                style={
                    isCurrent
                        ? { color: 'black' }
                        : { color: 'rgba(0,0,0,0.3)' }
                }
            >
                {props.title}
            </p>
            {isCurrent ? <MdWest size={20} color="black" /> : <></>}
        </NavButtonBlock>
    );
});

export default NavButton;
