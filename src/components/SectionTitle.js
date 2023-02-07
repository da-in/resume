import React from 'react';
import theme from '../assets/theme';
import styled from 'styled-components';

const Title = styled.div`
  padding: 40px 0px 20px 0px;
  font-size: ${theme.font.big};
  font-weight: 500;
`;

function SectionTitle({ children }) {
  return <Title>{children}</Title>;
}

export default SectionTitle;
