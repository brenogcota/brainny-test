import styled from 'styled-components';
import { colors } from '../../shared/constants';

const { black } = colors;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${black};
  text-align: center;
`;
