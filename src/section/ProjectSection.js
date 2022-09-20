import React from 'react';
import { MainContainer } from '../components/Containers';
import MarkdownRenderer from '../components/MarkdownRenderer';

const markdown = `
  # title
  ### subtitle
  일반 텍스트 입니다
  \`\`\`
  code block
  \`\`\`
`;

function ProjectSection() {
    return (
        <MainContainer>
            <MarkdownRenderer>{markdown}</MarkdownRenderer>
        </MainContainer>
    );
}

export default ProjectSection;
