import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};

    width: 100%;
    min-height: 100vh;
    background: #F2F2F2;
`;

export const Main = styled.div`
    padding: 15px 10%
`;
