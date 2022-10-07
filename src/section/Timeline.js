import React, { forwardRef, useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SectionTitle from '../components/SectionTitle';

const Timeline = forwardRef((props, scrollRef) => {
    const markdown = require('../markdown/timeline.md');
    const [project, setProject] = useState('');
    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setProject(text));
    return (
        <div ref={(cur) => (scrollRef.current[4] = cur)}>
            <SectionTitle>Timeline</SectionTitle>
            <MarkdownRenderer>{project}</MarkdownRenderer>
        </div>
    );
});

export default Timeline;