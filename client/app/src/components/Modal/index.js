import React from 'react';
import { Modal as AntModal } from 'antd';

import { Container } from './styles';

function Modal(props) {
  return (
    <Container>
        <AntModal {...props} maskClosable={true} onCancel={() => props.setIsVisible(false)}>
          {props.children}
        </AntModal>
    </Container>
  );
}

export default Modal;