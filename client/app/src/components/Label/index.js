import React from 'react';

import { Container } from './styles';

function Label({ Icon, title, ...rest }) {
  return (
    <Container {...rest}>
        {!!Icon && <Icon style={{ fontSize: '20px', marginRight: '.5rem' }} />}
        <span>{title}</span>
    </Container>
  );
}

export default Label;