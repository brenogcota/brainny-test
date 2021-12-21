import { Button } from 'antd';
import { orderBy } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import List from '../../components/List';

import Sidebar from '../../components/Sidebar';
import { getRegisters } from '../../services/registers';
import socket from '../../shared/socket';
import { useStateLocale } from '../../store/context/locale';

import { Container, Main } from './styles';

function Dashboard() {
  const [registers, setRegisters] = useState([])
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(0);
  const { locale } = useStateLocale();

  useEffect(() => {
    loadRegisters()

    socket.on('new_register', (data) => {
      loadRegisters()
    })
  }, [])

  useEffect(() => {
    loadRegisters()
  }, [page])

  const loadRegisters = async () => {
    const { count, ...registers } = await getRegisters(limit, page)
    setCount(count)
    setRegisters(orderBy(registers, ['time_registered'], ['desc']))
  }
  
  return (
    <Container gridTemplateColumns={'8% 92%'}>
        <Sidebar />

        <Main>
          
          <List  registers={registers} />

          <div className='flex items-end'>
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(0)}>1</button>
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(1)}>2</button>
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(2)}>3</button>
            ...
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(count-1)}>{count}</button>
          </div>
        </Main>
    </Container>
  );
}

export default Dashboard;