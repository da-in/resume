import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import styles from '../assets/styles';
import Tag from '../components/Tag';

function ProjectBlock({ title, date, markdown, tag }) {
    const [project, setProject] = useState('');
    fetch(markdown)
        .then((response) => {
            return response.text();
        })
        .then((text) => setProject(text));
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                padding: '20px 0px',
            }}
        >
            <div style={{ width: '250px' }}>
                <p style={{ ...styles.fontWeight.bold, fontSize: '18px' }}>
                    {title}
                </p>
                <p>{date}</p>
                <br />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {tag?.map((data) => (
                        <Tag key={data}>{data}</Tag>
                    ))}
                </div>
            </div>
            <div style={{ maxWidth: '500px' }}>
                <MarkdownRenderer>{project}</MarkdownRenderer>
            </div>
        </div>
    );
}

export default ProjectBlock;
