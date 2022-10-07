import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SectionTitle from '../components/SectionTitle';

function Timeline() {
    const markdown = require('../markdown/timeline.md');
    const [project, setProject] = useState('');
    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setProject(text));
    return (
        <>
            <SectionTitle>Timeline</SectionTitle>
            <MarkdownRenderer>{project}</MarkdownRenderer>
        </>
    );
}

export default Timeline;
