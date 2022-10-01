import styled from 'styled-components';

// Contain Navigation & MainSection
export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 15% 0 15%;
    padding-top: 20px;
    gap: 80px;
    @media screen and (max-width: 768px) {
        margin: 0 8% 0 8%;
    }
`;

// MainSection Container
export const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: 'flex-start';
    gap: 30px;
`;
