import styled, { css } from 'styled-components';

import { colors } from '../../shared/constants';

const { primary, white, whiteDarken, grayLight } = colors;

export const Container = styled.div`
    min-height: 100vh;
    position: fixed;
    top: 0;

    display: flex;
`;

export const SidebarItem = styled.div`
    opacity: ${({ active }) => active ? '1' : '.7' };
    border-left: ${({ active }) => active ? `2px solid ${primary}` : 'none' };

    display: ${({ hidden }) => hidden ? 'none' : 'block' };
`;

export const LeftContainer = styled.div`
    background: ${white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 6rem;

    transition: width .4s;

    box-shadow: 0 0 25px -5px ${grayLight};


    .logo {
        background: ${white};
    }
`;
