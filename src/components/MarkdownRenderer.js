import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
  # title
  ### subtitle
  일반 텍스트 입니다
  \`\`\`
  code block
  \`\`\`
`;

function MarkdownRenderer() {
    return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default MarkdownRenderer;
