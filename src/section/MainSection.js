import React from 'react';
import { MainContainer, WhiteBlockContainer } from '../components/Containers';
import TypeTitle from '../components/TypeTitle';
import profile from '../assets/profile.png';
import styled from 'styled-components';

const ProfileImgContainer = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 75px;
    display: flex;
    justify-content: center;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

function MainSection() {
    return (
        <MainContainer>
            <div>PORTFOLIO</div>
            <TypeTitle />
            <ProfileImgContainer>
                <img src={profile} height="100%" alt="profile" />
            </ProfileImgContainer>
            <div>
                안녕하세요! 무럭무럭 자라는 프론트엔드 새싹 개발자 최다인입니다
                🙂
            </div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: '20px',
                }}
            >
                <div style={{ width: '50%' }}>
                    <Row>
                        <div style={{ fontWeight: '700' }}>Univ</div>
                        <div>Soongsil University</div>
                    </Row>
                    <Row>
                        <div style={{ fontWeight: '700' }}>mail</div>
                        <div>talown@naver.com</div>
                    </Row>
                    <Row>
                        <div style={{ fontWeight: '700' }}>Github</div>
                        <a href="https://github.com/da-in">
                            https://github.com/da-in
                        </a>
                    </Row>
                    <Row>
                        <div style={{ fontWeight: '700' }}>SNS</div>
                        <div>Instagram dain.py</div>
                    </Row>
                </div>
                <a style={{ width: '50%' }} href="https://da-in.github.io/">
                    <WhiteBlockContainer>
                        <div>개발 기록 블로그</div>
                        <div>https://da-in.github.io</div>
                    </WhiteBlockContainer>
                </a>
            </div>
        </MainContainer>
    );
}

export default MainSection;
