import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SectionTitle from '../components/SectionTitle';

function Project() {
    const markdown = require('../markdown/project.md');
    const [project, setProject] = useState('');
    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setProject(text));
    return (
        <>
            <SectionTitle>Project</SectionTitle>
            <MarkdownRenderer>{project}</MarkdownRenderer>
        </>
    );
}

export default Project;
