import React, { forwardRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Tag from '../components/Tag';

const Skill = forwardRef((props, scrollRef) => {
    return (
        <div ref={(cur) => (scrollRef.current[2] = cur)}>
            <SectionTitle>Skill</SectionTitle>
            <table>
                <tbody>
                    <tr>
                        <th>Language</th>
                        <td>
                            <Tag>Typescript</Tag>
                            <Tag>Javascript</Tag>
                            <Tag>Python</Tag>
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
                        <th>BackEnd</th>
                        <td>
                            <Tag>Django</Tag>
                        </td>
                    </tr>
                    <tr>
                        <th>Design</th>
                        <td>
                            <Tag>Figma</Tag>
                            <Tag>AdobeXD</Tag>
                            <Tag>Zeplin</Tag>
                            <Tag>Photoshop</Tag>
                            <Tag>illustrator</Tag>
                            <Tag>PremerePro</Tag>
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
});

export default Skill;
