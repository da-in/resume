import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../assets/profile.png';
import styles from '../assets/styles';

const IntroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

function Intro() {
    return (
        <IntroContainer>
            <img
                src={ProfileImg}
                alt="profile"
                style={{
                    width: '260px',
                    height: '260px',
                    objectFit: 'contain',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <p style={styles.fontWeight.bold}>
                    안녕하세요. 프론트엔드 개발자 최다인 입니다.
                </p>
                <p>
                    <mark>
                        사람들과 함께 소통하며 시너지를 내고 목표를 달성하는 것
                    </mark>
                    을 좋아하고, 경험해왔습니다.
                    <br />
                    그렇게 오늘 날<mark> 협업을 즐기는 개발자</mark>가
                    되었습니다.
                </p>
                <p>
                    뭐든지<mark> 직접 구현해보는 것</mark>을 좋아해서 Blog와
                    Portfolio 등을 직접 만들고 운영중입니다.
                    <br />
                    항상 무엇이든 기록으로 남기려 노력합니다.
                </p>
                <p>
                    개발 이외의 시간에는 주로<mark> 헬스</mark>와
                    <mark> 아카펠라</mark>를 합니다.
                </p>
            </div>
        </IntroContainer>
    );
}

export default Intro;
