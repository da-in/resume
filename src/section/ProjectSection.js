import React, { useState } from 'react';
import { MainContainer } from '../components/Containers';
import MarkdownRenderer from '../components/MarkdownRenderer';

function ProjectSection() {
    const markdown = require('../markdown/project.md');
    const [project, setProject] = useState('');

    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setProject(text));

    return (
        <MainContainer>
            <div style={{ textAlign: 'left', width: '100%' }}>
                <MarkdownRenderer>{project}</MarkdownRenderer>
            </div>
        </MainContainer>
    );
}

export default ProjectSection;
