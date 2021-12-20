import styled from 'styled-components';

export const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 100px;
  z-index: 1;
  background: #F9F9F9;
  padding: 20px 10px 0;
  width: 400px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;

  box-shadow: 0 0 15px -5px #ddd;
  cursor: default
`;
