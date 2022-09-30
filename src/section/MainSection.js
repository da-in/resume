import React from 'react';

function MainSection() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '30px',
            }}
        >
            <div>안녕하세요 최다인 입니다.</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>사진</div>
                <div>
                    <p>안녕하세요. 프론트엔드 개발자 최다인 입니다.</p>
                    <p>
                        사람들과 함께 소통하고 협업하는 즐거움으로 개발에 임하고
                        있습니다. 뭐든지 직접 구현해보는 것을 좋아해서 Blog와
                        Portfolio 등을 직접 만들어 사용하고 있습니다. 항상
                        무엇이든 기록으로 남기려 노력합니다.
                    </p>
                    <p>취미는 헬스와 아카펠라 입니다.</p>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
