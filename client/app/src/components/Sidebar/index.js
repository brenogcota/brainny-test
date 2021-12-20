import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    DashboardOutlined,
    SettingOutlined,
    CloseOutlined,
    UsergroupAddOutlined,
    OrderedListOutlined
} from '@ant-design/icons';

import { useAuth } from '../../store/context/auth';

import Label from '../Label';
import Notification from '../Notification';

import { Container, 
         SidebarItem, 
         LeftContainer
} from './styles';

import { colors } from '../../shared/constants';
import { useStateLocale } from '../../store/context/locale';
import Invite from '../Invite';

const styledIcon = {
    fontSize: '20px',
    cursor: 'pointer'
}

function Sidebar() {
    return (
        <div className="z-10">
            <Container>
                <SideBarLeft />
            </Container>
        </div>
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
                    <div className="logo w-full my-3 pb-3">
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.528 36.3779C50.2871 49.4692 37.1244 57.4307 24.1331 54.1685C11.1419 50.9064 3.23117 37.6532 6.4721 24.562C9.71303 11.4708 22.8757 3.50927 35.867 6.77142C48.8583 10.0336 56.769 23.2867 53.528 36.3779Z" stroke="#39E991"/>
                            <path d="M55.649 32.3257C55.649 44.4685 45.8787 54.288 33.8562 54.288C21.8337 54.288 12.0634 44.4685 12.0634 32.3257C12.0634 20.1829 21.8337 10.3635 33.8562 10.3635C45.8787 10.3635 55.649 20.1829 55.649 32.3257Z" stroke="#39E991" stroke-width="4"/>
                            <path d="M49.5566 34.4694C46.9742 44.901 36.486 51.2441 26.1356 48.645C15.7852 46.046 9.48152 35.4865 12.064 25.0549C14.6465 14.6233 25.1346 8.28029 35.4851 10.8793C45.8355 13.4784 52.1391 24.0379 49.5566 34.4694Z" stroke="#39E991"/>
                        </svg>
                    </div>

                    <SidebarItem onClick={ () => {
                        setActivePage('Dashboard')
                        history.push('/dash')
                    }} active={activePage ==='Dashboard'} className="flex items-center my-3 cursor-pointer w-full px-3">
                        <DashboardOutlined style={styledIcon} />
                    </SidebarItem>

                    <SidebarItem onClick={ () => {
                        setActivePage('Times')
                        history.push('/registers')
                    }} active={activePage ==='Times'} className="flex items-center my-3 cursor-pointer w-full px-3">
                        <OrderedListOutlined style={styledIcon} />
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