import React, { useCallback, useEffect, useState } from 'react';
import { orderBy } from 'lodash';
import moment from 'moment';
import { Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import { useStateLocale } from '../../store/context/locale';

import socket from '../../shared/socket';
import { emptyArray, getUserLogged } from '../../utils';

import { NotificationContainer } from './styles';
import Avatar from '../Avatar';

import { colors, dateFormat } from '../../shared/constants';
import { getNotifications } from '../../services/notification';
const { primary } = colors;

function Notification() {
    const [notifications, setNotifications] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const { id } = getUserLogged()

    const { locale } = useStateLocale()

    useEffect(() => {
        listenUserNotifications(id)
    }, []);

    const listenUserNotifications = useCallback(async (id) => {
        const notifications = await getAllNotifications(id);
        setNotifications(notifications)
        socket.on(id, (data) => {
            console.log(notifications, data)
            setNotifications(orderBy([...notifications, data], ['created_at'], ['desc']))
        })
    }, [id])

    const getAllNotifications = async (id) => {
        let rows = await getNotifications(id);
        rows = orderBy(rows, ['created_at'], ['desc'])
        return rows;
    }

    return (
        <>
            <Badge size="small" count={notifications.length} onClick={() => setIsOpen(!isOpen)}>
                <BellOutlined style={{ fontSize: '20px', cursor: 'pointer'}}/>  
            </Badge>

            {
                isOpen && <NotificationContainer className="scrollbar-light">
                            <h1 className="text-2xl border-b pb-2">{locale['notifications']}</h1>
                            { 
                                emptyArray(notifications) ? 
                                    <div className="mx-2 my-6 text-xl text-gray-600">{`${locale['dont-have-an']} ${locale['notifications']}.`}</div>
                                    :
                                    notifications.map(({ id, subscriber, created_at, read, message, project_id, task_id }) => {
                                        return <div className="flex bg-white p-2 my-2" key={id} style={{ opacity: read ? '0.7' : '1' }}>
                                                    <Avatar name={subscriber.name} src={subscriber.avatar_url} />
                                                    <div className="mx-1">
                                                        <p className="mb-0 text-xs"><strong className="text-sm">{subscriber.name}</strong> {subscriber.email} - {moment(created_at).format(dateFormat)}</p>
                                                        <span>{message}</span>

                                                        <p><a style={{ color: primary, fontWeight: 'bold' }} href={`//${project_id}/task/${task_id}`}>{locale['see-task']}</a></p>
                                                    </div>
                                                </div>
                            })

                            }
                          </NotificationContainer>
            }
        </>
    );
}

export default React.memo(Notification);