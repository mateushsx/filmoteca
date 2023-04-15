import styled from 'styled-components';

export const AppMain = styled.div`
    background-color: #0b2545;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding-top: 30px;
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    gap: 20px;
    width: 100%;
    margin: 0 auto;
`;

export const AppTitle = styled.h1`
    color: white;
`;

export const AppHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const AppInput = styled.input`
    padding: 8px;
    width: 400px;
    font-size: 18px;
    border-radius: 10px;
    outline: none;
`;

export const AppSubtitle = styled.h2`
    color: white;
`;
