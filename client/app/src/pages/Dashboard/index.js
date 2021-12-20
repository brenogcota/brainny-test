import { Button } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import List from '../../components/List';

import Sidebar from '../../components/Sidebar';
import { useStateLocale } from '../../store/context/locale';

import { Container, Main } from './styles';

function Dashboard() {
  const { locale } = useStateLocale()
  
  return (
    <Container gridTemplateColumns={'8% 92%'}>
        <Sidebar />

        <Main>

          <div className="m-4 relative right-0" style={{ left: '90%' }}>
            <Button type="primary"><span className='text-sm'>{locale["register"]}</span></Button>
          </div>

          <List  registers={[]} />
        </Main>
    </Container>
  );
}

export default Dashboard;