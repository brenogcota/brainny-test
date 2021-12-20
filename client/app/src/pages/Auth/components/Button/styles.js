import styled from 'styled-components';

const gradient = 'linear-gradient(325deg, rgba(114,119,212,1) 9%, rgba(194,133,224,1) 62%)';

export const Container = styled.button`
  background: ${({ background }) => background ? background : gradient };
  padding: .69rem 1.25rem;
  margin: .3rem 0;
  border-radius: 6px;
  width: 90%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .2s;

  &:hover {
      opacity: .9;
  }
`;
