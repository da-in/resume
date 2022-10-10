import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SectionTitle from '../components/SectionTitle';

function Project({ scrollRef }) {
    const markdown = require('../markdown/project.md');
    const [project, setProject] = useState('');
    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setProject(text));
    return (
        <div ref={(cur) => (scrollRef.current[3] = cur)}>
            <SectionTitle>Project</SectionTitle>
            <MarkdownRenderer>{project}</MarkdownRenderer>
        </div>
    );
}

export default Project;
