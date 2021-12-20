import styled from 'styled-components';
import { colors } from '../../shared/constants';
import { parseColor } from '../../utils';

import { hexToRgb, randomColor } from '../../utils';

const bgColor = randomColor();
const { white } = colors

export const Container = styled.div`
  cursor: pointer;
`;

export const DefaultAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ background }) => background ? parseColor(background) : white};
  border: 1px solid ${({ background }) => background ?  parseColor(background) : white};
  font-weight: 600;
  font-size: 12px;
  width: 2rem;
  height: 2rem;
  padding: .5rem;
  border-radius: 50%;
  background: ${({ background }) => background ? background : bgColor};
  text-transform: uppercase;
`;
