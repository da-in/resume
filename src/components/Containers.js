import styled from 'styled-components';

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

export const WhiteBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f6f8fa;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
`;
