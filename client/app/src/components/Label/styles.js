import styled, { css } from 'styled-components';
import { colors } from '../../shared/constants';

const { white, black } = colors;

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ background }) => background ? background : white };
  color: ${({ color }) => color ? color : black };

  ${({ active }) => active && css`
      color: var(--primary);

      svg {
        fill: var(--primary);
      }
    `
  }
`;
