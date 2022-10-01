import React, { useState } from 'react';
import { MainContainer } from '../components/Containers';
import MarkdownRenderer from '../components/MarkdownRenderer';

function Skill() {
    const markdown = require('../markdown/skill.md');
    const [skill, setSkill] = useState('');

    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setSkill(text));
    return (
        <div
            style={{
                backgroundColor: '#f6f8fa',
            }}
        >
            <MainContainer>
                <MarkdownRenderer>{skill}</MarkdownRenderer>
            </MainContainer>
        </div>
    );
}

export default Skill;
