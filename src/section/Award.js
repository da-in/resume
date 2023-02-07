import React from 'react';
import AwardBlock from '../components/AwardBlock';
import SectionTitle from '../components/SectionTitle';
import { award } from '../markdown/award';

export const MapProject = (projects) =>
  projects.map((data) => (
    <div key={data.id}>
      <AwardBlock data={data} />
      {data.id !== projects.length && <hr />}
    </div>
  ));

function Award({ scrollRef }) {
  return (
    <div ref={(cur) => (scrollRef.current[5] = cur)}>
      <SectionTitle>Award</SectionTitle>
      {MapProject(award)}
    </div>
  );
}

export default Award;
