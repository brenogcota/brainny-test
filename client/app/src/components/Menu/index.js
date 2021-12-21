import { Button, Input } from 'antd';
import React from 'react';
import { useStateLocale } from '../../store/context/locale';

import { Container, Box } from './styles';

function Menu() {
    const { locale } = useStateLocale()

    return (
        <Container>
            <Box>
                <header>
                    <span>Novo Registro</span>
                </header>

                <div className='mb-8'>
                    <label className='py-3'>{locale["collaborator"]}</label>
                    <Input placeholder='Joao silva' />
                </div>

                <div className='mb-8'>
                    <label className='py-3'>{locale["date"]} {locale["hour"]}</label>
                    <Input placeholder='_ /_ /_  __:__' />
                </div>

                <footer className='flex'>
                    <Button type="primary">Salvar</Button>
                    <Button>Cancelar</Button>
                </footer>

            </Box>
        </Container>
    )
}

export default Menu;