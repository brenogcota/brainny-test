import { Button } from 'antd';
import { orderBy } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import List from '../../components/List';
import Menu from '../../components/Menu';

import Sidebar from '../../components/Sidebar';
import { getUserRegisters } from '../../services/registers';
import { useStateLocale } from '../../store/context/locale';
import { getUserLogged } from '../../utils';

import { Container, Main } from './styles';

function Registers() {
  const [registers, setRegisters] = useState([])
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(0);
  const { locale } = useStateLocale();

  useEffect(() => {
    loadRegisters()
  }, [])

  useEffect(() => {
    loadRegisters()
  }, [page])

  const loadRegisters = async () => {
    const { id } = getUserLogged()
    const { count, ...registers } = await getUserRegisters(id, limit, page)
    setCount(count)
    setRegisters(orderBy(registers, ['created_at'], ['desc']))
  }
  
  return (
    <Container gridTemplateColumns={'8% 92%'}>
        <Sidebar />

        <Main>

          <div className="my-4 relative right-0">
            <Button type="primary"><span className='text-sm'>{locale["register"]}</span></Button>
          </div>

          <List  registers={registers} />

          <div className='flex items-end'>
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(0)}>1</button>
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(1)}>2</button>
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(2)}>3</button>
            ...
            <button className='flex items-center justify-center m-2 p-2 bg-gray-300 rounded cursor-pointer w-8 h-8 text-white hover:bg-gray-500' onClick={() => setPage(count-1)}>{count}</button>
          </div>
        </Main>

        <Menu></Menu>
    </Container>
  );
}

export default Registers;