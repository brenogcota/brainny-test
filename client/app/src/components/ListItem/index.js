import React from 'react';

import { Container } from './styles';

function ListItem({ register }) {
    const { name, index, date, hour } = register
    return (
        <Container>
            <div>
                <h4 className='mb-0 text-lg text-gray-600'>{ name }</h4>
                <span className='text-sm text-gray-400'>{index}</span>
            </div>

            <span className='text-lg text-gray-400'>{date}</span>

            <strong className='text-2xl text-gray-400'>{hour}</strong>
        </Container>
    );
}

export default React.memo(ListItem);