import React, { useState } from 'react';
import { MainContainer } from '../components/Containers';
import MarkdownRenderer from '../components/MarkdownRenderer';

// [![da-in's GitHub stats](https://github-readme-stats.vercel.app/api?username=da-in)](https://github.com/anuraghazra/github-readme-stats)
// [![Solved.ac profile](http://mazassumnida.wtf/api/v2/generate_badge?boj=talown)](https://solved.ac/talown)

function SkillSection() {
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

export default SkillSection;
