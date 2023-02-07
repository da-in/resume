import React from 'react';
import theme from '../assets/theme';
import styled from 'styled-components';

const Title = styled.div`
  padding: 20px 0px 20px 0px;
  margin-bottom: 20px;
  border-bottom: solid 1px;
  font-size: ${theme.font.big};
  font-weight: 500;
`;

function SectionTitle({ children }) {
  return <Title>{children}</Title>;
}

export default SectionTitle;
