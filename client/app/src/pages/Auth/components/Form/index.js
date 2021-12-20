import React from 'react';

import { Container } from './styles';

function Form(props) {
    return (
      <Container {...props}>
        {props.children}
      </Container>
    );
}

export default Form;