import React from 'react';

import Sidebar from '../../components/Sidebar';
import Startup from '../../components/Startup';

import { useStateLayout } from '../../store/context/layout';
import { useProject } from '../../store/context/project';

import { Container } from './styles';

function Dashboard() {
  const { layout } = useStateLayout(); 
  const { projects, dispatch } = useProject(); 

  return (
    <Container gridTemplateColumns={layout.gridTemplateColumns}>
        <Sidebar projects={projects} />
        <Startup className="w-full h-full" />
    </Container>
  );
}

export default Dashboard;