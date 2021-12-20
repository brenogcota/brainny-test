import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Board from '../../components/Board';
import List from '../../components/List';

import { useStateLayout } from '../../store/context/layout';
import { useProject } from "../../store/context/project";

import { Container } from './styles';

function Dashboard() {
  const { layout } = useStateLayout();
  const { projects } = useProject();
  const [project, setProject] = useState({});
  let { projectId } = useParams();

  useEffect(() => {
    const project = filterProject();
    setProject(project);
  }, [projects]);
  
  const filterProject = useCallback(() => {
    return projects.filter(project => project.id === projectId);
  }, [projects])

  const views = {
    'List': List,
    'Board': Board
  }

  const Component = views[layout.viewMode];
  
  return (
    <Container gridTemplateColumns={layout.gridTemplateColumns}>
        <Sidebar projects={projects} />
        <div>
          <Header />
          <Component project={project} />
        </div>
    </Container>
  );
}

export default Dashboard;