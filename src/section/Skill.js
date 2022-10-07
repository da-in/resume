import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SectionTitle from '../components/SectionTitle';

function Skill() {
    const markdown = require('../markdown/skill.md');
    const [skill, setSkill] = useState('');

    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setSkill(text));
    return (
        <>
            <SectionTitle>Skill</SectionTitle>
            <div>
                <MarkdownRenderer>{skill}</MarkdownRenderer>
            </div>
        </>
    );
}

export default Skill;
