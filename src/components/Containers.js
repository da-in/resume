import styled from 'styled-components';

// Portfolio Page Margin
export const Margin = styled.div`
    margin: 0 15% 0 15%;
    @media screen and (max-width: 768px) {
        margin: 0 8% 0 8%;
    }
`;

// Contain Navigation & MainSection
export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    gap: 80px;
`;

// MainSection Container
export const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: 'flex-start';
    gap: 30px;
`;
