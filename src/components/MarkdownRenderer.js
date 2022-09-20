import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownRenderer({ children }) {
    return <ReactMarkdown>{children}</ReactMarkdown>;
}

export default MarkdownRenderer;
