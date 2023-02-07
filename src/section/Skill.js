import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Tag from '../components/Tag';

function Skill({ scrollRef }) {
  return (
    <div ref={(cur) => (scrollRef.current[2] = cur)}>
      <SectionTitle>Skill</SectionTitle>
      <table>
        <tbody>
          <tr>
            <th>Language</th>
            <td>
              <Tag>Javascript</Tag>
              <Tag>Python</Tag>
              <Tag>Typescript</Tag>
            </td>
          </tr>
          <tr>
            <th>Frontend</th>
            <td>
              <Tag>React</Tag>
              <Tag>React Native</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
            </td>
          </tr>
          <tr>
            <th>Styling</th>
            <td>
              <Tag>Emotion</Tag>
              <Tag>Styled Components</Tag>
            </td>
          </tr>
          <tr>
            <th>UI Design</th>
            <td>
              <Tag>Figma</Tag>
              <Tag>AdobeXD</Tag>
              <Tag>Zeplin</Tag>
              <Tag>Photoshop</Tag>
              <Tag>illustrator</Tag>
              <Tag>Premere</Tag>
            </td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>
              <Tag>Git</Tag>
              <Tag>Asana</Tag>
              <Tag>Slack</Tag>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Skill;
