import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../assets/profile.png';
import theme from '../assets/theme';

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
        <p style={{ fontSize: theme.font.medium, fontWeight: 500 }}>
          안녕하세요. 프론트엔드 개발자 최다인 입니다.
        </p>
        <p>
          <mark>사용자와 가까운 영역</mark>에서 개발하고 임팩트를 내는 것을
          좋아합니다.
          <br />
          <mark>UX</mark> 와 <mark>인터랙티브 웹</mark> 에 관심이 있습니다.
        </p>
        <p>
          주도적으로 <mark>문제를 고민하고</mark> 개선하며 보람을 느낍니다.
        </p>
        <p>
          <mark>사람들과 함께하는 것이 즐겁습니다.</mark>
          <br />
          현재 3개의 스터디를 운영 및 참여하며 더욱 빠르게 성장중입니다.
        </p>
      </div>
    </IntroContainer>
  );
}

export default Intro;
