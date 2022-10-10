import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import styles from '../assets/styles';
import ProjectBlock from '../components/ProjectBlock';
import { personal, work } from '../markdown/projects';

const Subtitle = styled.p`
    ${styles.fontWeight.bold}
    font-size: 22px;
`;

const MapProject = (projects) =>
    projects.map((data) => (
        <>
            <ProjectBlock
                key={data.id}
                title={data.title}
                date={data.date}
                markdown={data.md}
                tag={data.tag}
            />
            {data.id !== projects.length ? <hr /> : <></>}
        </>
    ));

function Project({ scrollRef }) {
    return (
        <div ref={(cur) => (scrollRef.current[3] = cur)}>
            <SectionTitle>Project</SectionTitle>
            <Subtitle>Work Experience & Projects</Subtitle>
            {MapProject(work)}
            <br />
            <Subtitle>Personal Experience & Projects</Subtitle>
            {MapProject(personal)}
        </div>
    );
}

export default Project;
