import React from 'react';
import styled from 'styled-components';
import sign from '../assets/choidain.svg';

const NavTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
`;

function Navigation() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                // minWidth 추후 제거
                minWidth: '180px',
            }}
        >
            <NavTitle>
                <img src={sign} alt="sign" width="70px" />
                <div>포트폴리오</div>
            </NavTitle>
            <div className="handwriting">Contact</div>
            <div className="handwriting">Skill</div>
            <div className="handwriting">Project</div>
            <div className="handwriting">Timeline</div>
        </div>
    );
}

export default Navigation;
