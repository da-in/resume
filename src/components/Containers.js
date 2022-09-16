import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 20% 0 20%;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        margin: 0 8% 0 8%;
    }
`;

export const WhiteBlockContainer = styled.div`
    display: flex;
    background-color: #f6f8fa;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
`;
