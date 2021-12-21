import { Button, Input } from 'antd';
import React, { useRef } from 'react';
import { useStateLocale } from '../../store/context/locale';
import { useAuth } from '../../store/context/auth';

import { Container, Box } from './styles';
import moment from 'moment';
import { createRegister } from '../../services/registers';

function Menu({ isOpen, setIsOpen }) {
    const { locale } = useStateLocale()
    const { auth: { user } } = useAuth()
    const inputTimeRef = useRef(null)

    const onSubmit = async () => {
        const time_registered = inputTimeRef.current.value;

        await createRegister({ time_registered, user_id: user.id  })
    }

    return (
        <Container isOpen={isOpen}>
            <Box>
                <header>
                    <span>Novo Registro</span>
                </header>

                <div className='mb-8'>
                    <label className='py-3'>{locale["collaborator"]}</label>
                    <h2 className='text-2xl text-gray-600'>{user.name}</h2>
                </div>

                <div className='mb-8'>
                    <label className='py-3'>{locale["date"]} {locale["hour"]}</label>
                    <br/>
                    <input ref={inputTimeRef} type="datetime-local" id="time_registered"
                           name="time_registered" placeholder={moment(new Date(), 'MM-DD-YYYY HH:mm').utc().format("YYYY-MM-DD HH:mm")}
                           />
                </div>

                <footer className='flex'>
                    <Button onClick={onSubmit} type="primary">Salvar</Button>
                    <Button onClick={() => setIsOpen(!isOpen)}>Cancelar</Button>
                </footer>

            </Box>
        </Container>
    )
}

export default Menu;