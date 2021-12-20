import React from 'react';

import { Container } from './styles';

function Button({ children, onClick, background }) {
    return (
        <Container background={background}>
            {children}
        </Container>
    );
}

export default Button;