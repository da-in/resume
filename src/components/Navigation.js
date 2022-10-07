import React, { forwardRef } from 'react';
import styled from 'styled-components';
import sign from '../assets/choidain.svg';
import NavButton from './NavButton';

const NavTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
`;

const Navigation = forwardRef((props, scrollRef) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: '180px',
                position: 'fixed',
            }}
        >
            <NavTitle>
                <img src={sign} alt="sign" width="70px" />
                <div>포트폴리오</div>
            </NavTitle>
            <NavButton
                index={0}
                title="Intro"
                ref={scrollRef}
                cur={props.index}
            />
            <NavButton
                index={1}
                title="Contact"
                ref={scrollRef}
                cur={props.index}
            />
            <NavButton
                index={2}
                title="Skill"
                ref={scrollRef}
                cur={props.index}
            />
            <NavButton
                index={3}
                title="Project"
                ref={scrollRef}
                cur={props.index}
            />
            <NavButton
                index={4}
                title="Timeline"
                ref={scrollRef}
                cur={props.index}
            />
        </div>
    );
});

export default Navigation;
