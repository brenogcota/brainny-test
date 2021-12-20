import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;

    input {
        display: none;
    }

    .editable-text {
        .anticon.anticon-edit {
            margin: 0 1rem;
            display: none;
        }
    }

    &:hover {
        .anticon.anticon-edit {
            display: block;
        }
    }

    ${({ isEditable }) => isEditable && css`
        input {
            display: block;
        }

        .editable-text, .anticon.anticon-edit {
            display: none;
        }

        ${Actions} {
            display: block;
        }
    `}
`;

export const Actions = styled.div`
    margin-left: .5rem;
    display: none;
`;
