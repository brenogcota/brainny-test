import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Divider } from 'antd';
import {
    DashboardOutlined,
    SettingOutlined, 
    PlusOutlined,
    CloseOutlined,
    UsergroupAddOutlined,
    LeftCircleOutlined
} from '@ant-design/icons';

import { useStateLayout } from '../../store/context/layout';
import { useAuth } from '../../store/context/auth';

import Label from '../Label';
import CreateBoard from '../CreateBoard';
import Avatar from '../Avatar';
import Notification from '../Notification';

import { Container, 
         SidebarItem, 
         LeftContainer, 
         RightContainer
} from './styles';
import { colors } from '../../shared/constants';
import { useStateLocale } from '../../store/context/locale';
import Invite from '../Invite';

const styledIcon = {
    fontSize: '20px',
    cursor: 'pointer'
}

function Sidebar({ projects }) {
    return (
        <div className="z-10">
            <Container>
                <SideBarLeft />
                <SideBarRight projects={projects} />
            </Container>
        </div>
    );
}

function SideBarRight({ projects }) {
    const [isRightContainerOpen, setIsRightContainerOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const { _, dispatch } = useStateLayout();

    const { locale } = useStateLocale()

    const handleLayout = () => {
        setIsRightContainerOpen(!isRightContainerOpen)
        if(isRightContainerOpen) return dispatch({type: 'HANDLE_LAYOUT', payload: { gridTemplateColumns: '8% 92%' }})

        dispatch({type: 'HANDLE_LAYOUT', payload: { gridTemplateColumns: '18% 82%' }})
    }

    return (
        <RightContainer open={isRightContainerOpen} className="relative">
            <LeftCircleOutlined
                className="handleOpen absolute top-2 -right-3.5 text-xl bg-white p-1 rounded-full" 
                onClick={handleLayout}
            />

           <h3 className="text-gray-600 text-lg">{locale['projects']}</h3>
           <div className="projects-list overflow-auto max-h-48">
            {
              projects.length > 0 &&  
                projects.map(board => {
                    return <Link
                                key={board.id}
                                to={{
                                    pathname: `/boards/${board.id}`
                                }}
                            >
                                <div className="project-link flex items-center my-1 bg-gray-100 py-1 px-2">
                                    <Avatar 
                                        src={board.avatar_url && URL.createObjectURL(board.avatar_url)}
                                        name={board.name}
                                        background={board.avatar_color}
                                        style={{ width: '2rem', height: '2rem'}} 
                                    />
                                    <span className="ml-2 text-gray-600">{board.name}</span>
                                </div>
                            </Link>
                })
            }
            </div>

            <Divider />

            <Label
                Icon={PlusOutlined}
                title={`${locale['add-to']} ${locale['board']}`}
                style={{ cursor: 'pointer', padding: '.3rem .5rem', margin: '.2rem 0' }}
                onClick={() => setIsVisible(!isVisible)}
            />
            <CreateBoard isVisible={isVisible} setIsVisible={setIsVisible} />

        </RightContainer>
    );
}

function SideBarLeft() {
    const [activePage, setActivePage] = useState('Dashboard');
    const [isInviteVisible, setIsInviteVisible] = useState(false);
    const { onLogout } = useAuth();
    const history = useHistory();

    return (
        <>
            <LeftContainer>
                <section className="flex flex-col relative items-center">
                    <h1 className="logo w-full px-3 my-3">PM</h1>

                    <SidebarItem onClick={ () => {
                        setActivePage('Dashboard')
                        history.push('/')
                    }} active={activePage ==='Dashboard'} className="flex items-center my-3 cursor-pointer w-full px-3">
                        <DashboardOutlined style={styledIcon} />
                    </SidebarItem>
                    <SidebarItem onClick={ () => setActivePage('Notificações')} active={activePage ==='Notificações'} className="flex items-center my-3 cursor-pointer w-full px-3">
                        <Notification />
                    </SidebarItem>
                    <SidebarItem onClick={ () => {
                        setActivePage('Convidar')
                        setIsInviteVisible(true)
                    }} active={activePage ==='Convidar'} className="flex items-center my-3 cursor-pointer w-full px-3">
                        <UsergroupAddOutlined style={styledIcon}/>
                    </SidebarItem>
                    <SidebarItem onClick={ () => {
                        setActivePage('Configurações')
                        history.push("/settings")
                    }} active={activePage ==='Configurações'} className="flex items-center my-3 cursor-pointer w-full px-3">
                        <SettingOutlined style={styledIcon}/>
                    </SidebarItem>
                </section>

                <div 
                    className="flex justify-center items-center bg-red-600 p-2 my-4 cursor-pointer rounded-full"
                    onClick={onLogout}
                >
                    <CloseOutlined style={{ color: colors.white }} />
                </div>
            </LeftContainer>
            <Invite visible={isInviteVisible} setIsVisible={setIsInviteVisible} />
        </>
    );
}

export default React.memo(Sidebar);