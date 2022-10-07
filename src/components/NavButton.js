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
    return (
        <NavButtonBlock
            onClick={() =>
                scrollRef.current[props.index].scrollIntoView({
                    behavior: 'smooth',
                })
            }
        >
            <p className="handwriting" style={{ color: 'rgba(0,0,0,0.3)' }}>
                {props.title}
            </p>
            <MdWest size={20} />
        </NavButtonBlock>
    );
});

export default NavButton;
