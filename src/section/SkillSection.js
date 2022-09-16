import React from 'react';
import { MainContainer } from '../components/Containers';

function SkillSection() {
    return (
        <div
            style={{
                backgroundColor: '#f6f8fa',
                padding: '20px 0px 20px 0px',
            }}
        >
            <MainContainer>
                <div>Skill</div>
                <div>React</div>
                <div>React Native</div>
                <div>JS</div>
                <div>TS</div>
                <div>HTML CSS</div>
            </MainContainer>
        </div>
    );
}

export default SkillSection;
