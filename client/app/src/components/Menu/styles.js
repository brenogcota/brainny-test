import styled from 'styled-components';
import { colors } from '../../shared/constants';

const { white, shadow } = colors;

export const Container = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;
    z-index: 11;

    display: ${({ isOpen }) => isOpen ? 'block' : 'none'}
`;

export const Box = styled.form`
    background: ${white};
    width: 30%;
    height: 100vh;

    position: relative;
    right: 0;
    left: 70%;

    padding: 20px;

    header {
        border-bottom: 1px solid ${shadow};
        margin-bottom: 30px;
        padding-bottom: 20px
    }

    footer {
        margin-top: 100%;
        justify-content: space-between;

        border-top: 1px solid ${shadow};
        padding-top: 20px
    }
`;