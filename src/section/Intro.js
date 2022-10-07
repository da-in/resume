import React from 'react';
import ProfileImg from '../assets/profile.png';
import styles from '../assets/styles';

function Intro() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
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
                    사람들과 함께 소통하고 협업하는 즐거움으로 개발에 임하고
                    있습니다.
                    <br /> 뭐든지 직접 구현해보는 것을 좋아해서 Blog와 Portfolio
                    등을 직접 만들어 사용하고 있습니다.
                    <br />
                    항상 무엇이든 기록으로 남기려 노력합니다.
                </p>
                <p>취미는 헬스와 아카펠라 입니다.</p>
            </div>
        </div>
    );
}

export default Intro;
