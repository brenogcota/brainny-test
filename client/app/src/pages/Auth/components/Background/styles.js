import styled from 'styled-components';
import { colors } from '../../../../shared/constants';

const { black } = colors;

export const Container = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   background-color: ${black};
   width: 100%;
   height: 100%;

   z-index: -1;

   svg.shape {
       position: absolute;
       right: -170px;
       top: 20px;
       width: 60%;
   }

   svg.logo {
       position: absolute;
       top: 100px;
       left: 20px;
       width: 25%;
   }
`;
