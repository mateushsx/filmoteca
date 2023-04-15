import styled from 'styled-components';

export const MovieItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 250px;
    height: 460px;
    background: #134074;
    border-radius: 16px;
    justify-content: space-between;
`;
export const MovieItemTitle = styled.h3`
    color: white;
    margin: 0%;
    padding: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const MovieItemImage = styled.img`
    width: 100%;
    border-radius: 16px;
`;
