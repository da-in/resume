import React from 'react';
import styled from 'styled-components';
import sign from '../assets/choidain.svg';

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 100;
    font-size: 36px;
    padding: 20px 0px;
`;

const SignContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 160px;
    border-bottom: solid 1px;
`;

function Title() {
    return (
        <TitleContainer>
            <span>안녕하세요</span>
            <SignContainer>
                <img src={sign} alt="sign" width="120px" />
            </SignContainer>
            <span>입니다.</span>
        </TitleContainer>
    );
}
export default Title;
