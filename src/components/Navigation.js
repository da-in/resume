import React, { forwardRef } from 'react';
import styled from 'styled-components';
import sign from '../assets/choidain.svg';
import NavButton from './NavButton';

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    position: fixed;
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
`;

const Navigation = forwardRef((props, scrollRef) => {
    return (
        <NavContainer>
            <NavTitle>
                <img src={sign} alt="sign" width="70px" />
                <div>포트폴리오</div>
            </NavTitle>
            <NavButton
                index={0}
                title="Intro"
                ref={scrollRef}
                currentIndex={props.currentIndex}
            />
            <NavButton
                index={1}
                title="Contact"
                ref={scrollRef}
                currentIndex={props.currentIndex}
            />
            <NavButton
                index={2}
                title="Skill"
                ref={scrollRef}
                currentIndex={props.currentIndex}
            />
            <NavButton
                index={3}
                title="Project"
                ref={scrollRef}
                currentIndex={props.currentIndex}
            />
            <NavButton
                index={4}
                title="Timeline"
                ref={scrollRef}
                currentIndex={props.currentIndex}
            />
        </NavContainer>
    );
});

export default Navigation;
