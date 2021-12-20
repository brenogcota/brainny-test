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
    border-left: ${({ active }) => active ? `2px solid ${primary}` : 'none' };;
`;

export const LeftContainer = styled.div`
    background: ${white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 4rem;

    transition: width .4s;

    /* &:hover {
        width: 6rem;
    } */

    .logo {
        font-size: 1rem;
        color: ${white};
        background: ${primary};
        width: 90%;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 30px;
    }
`;
export const RightContainer = styled.div`
    background: ${whiteDarken};
    padding: .5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    
    & * {
        transition: all .4s;
    }

    .handleOpen {
        border: .069rem solid ${grayLight};
        transition: all .4s;
    }

    ${({ open }) => !open && css`
        & * {
            opacity: 0;
            display: none;
        }

        & {
            width: 10%;
        }

        & .handleOpen, & .handleOpen * {
            opacity: 1;
            display: block;
        }

        & .handleOpen {
            transform: rotate(180deg);
        }

    `}


    border-right: .04rem solid ${grayLight};

    .project-link {
        max-width: 150px;
    }

    .projects-list::-webkit-scrollbar {
        width: 5px;
    }
    .projects-list::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    .projects-list::-webkit-scrollbar-thumb {
        background: #ddd; 
    }
    .projects-list::-webkit-scrollbar-thumb:hover {
        background: #ccc;
    }
`;
