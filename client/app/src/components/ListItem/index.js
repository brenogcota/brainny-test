import moment from 'moment';
import React from 'react';
import { dateFormat } from '../../shared/constants';
import Avatar from '../Avatar';

import { Container } from './styles';

function ListItem({ register }) {
    const { user: { name, avatar_url }, index, time_registered } = register

    return (
        <Container>
            <div className='flex items-center'>
                <Avatar src={avatar_url} name={name} />
                <h4 className='mb-0 text-lg text-gray-600 ml-2'>{ name }</h4>
            </div>

            <span className='text-lg text-gray-400'>{moment(time_registered).format(dateFormat)}</span>

            <strong className='text-2xl text-gray-400'>{moment(time_registered).format('HH:mm')}h</strong>
        </Container>
    );
}

export default React.memo(ListItem);