import { Input } from 'antd';
import React, { useRef } from 'react';
import { inviteUser } from '../../services/account';
import { useStateLocale } from '../../store/context/locale';
import { useProject } from '../../store/context/project';
import { getWorkspace } from '../../utils';

import Modal from '../Modal'

// import { Container } from './styles';

function Invite({ visible, setIsVisible }) {
    const emailInput = useRef(null)
    const { locale } = useStateLocale()
    const { account_name } = useProject()

    const invite_user = async () => {
        const email = emailInput.current.state.value;
        const { id } = getWorkspace();
        await inviteUser({ id, email, project: account_name })
        setIsVisible(false)
    }

    return (
        <Modal
            title={locale['invite']}
            setIsVisible={setIsVisible}
            visible={visible}
            onOk={invite_user}
        >
            <Input
                ref={emailInput}
                placeholder={locale['type-guest-email']} 
                type="email" 
            />
        </Modal>
    );
}

export default Invite;