import styled from 'styled-components';
import { colors } from '../../shared/constants';

const { white } = colors;

export const Container = styled.div`
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};

    width: 100%;
    height: 100%;
    background: ${white};
`;
