import React from 'react';
import { MainContainer, WhiteBlockContainer } from '../components/Containers';
import TypeTitle from '../components/TypeTitle';
import profile from '../assets/profile.png';
import styled from 'styled-components';
import MarkdownRenderer from '../components/MarkdownRenderer';

const introduce = `### Hi there 👋
My name is **da-in**, major in **computer science**💻 since 2017 at **Soongsil University** in Seoul, South Korea.  
안녕하세요! 매일 꾸준히 성장하는 프론트엔드 개발자 **최다인**입니다. 🙂`;

const ProfileImgContainer = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 75px;
    display: flex;
    justify-content: center;
`;

const Block = styled.div`
    width: 50%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

function MainSection() {
    return (
        <MainContainer>
            <div>PORTFOLIO</div>
            <TypeTitle />
            <ProfileImgContainer>
                <img src={profile} height="100%" alt="profile" />
            </ProfileImgContainer>
            <div style={{ textAlign: 'center' }}>
                <MarkdownRenderer>{introduce}</MarkdownRenderer>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: '20px',
                }}
            >
                <Block>
                    <table>
                        <tr>
                            <th>Univ</th>
                            <td>Soongsil University</td>
                        </tr>
                        <tr>
                            <th>Mail</th>
                            <td>talown@naver.com</td>
                        </tr>
                        <tr>
                            <th>Github</th>
                            <td>https://github.com/da-in</td>
                        </tr>
                        <tr>
                            <th>Instagram</th>
                            <td>@dain.py</td>
                        </tr>
                    </table>
                </Block>
                <Block>
                    <WhiteBlockContainer>
                        <div>개발 기록 블로그</div>
                        <a href="https://da-in.github.io/">
                            <div>https://da-in.github.io</div>
                        </a>
                    </WhiteBlockContainer>
                </Block>
            </div>
        </MainContainer>
    );
}

export default MainSection;
