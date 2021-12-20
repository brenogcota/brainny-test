import styled from 'styled-components';
import { colors } from '../../shared/constants';

const { white, shadow } = colors

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${white};
  box-shadow: 0 0 10px -5px ${shadow};
  padding: 5px 10px;
  margin: 1.5rem 0;
  border-radius: .5rem;
  cursor: pointer;
`;
