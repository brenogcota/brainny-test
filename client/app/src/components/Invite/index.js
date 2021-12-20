import { Input } from 'antd';
import React, { useRef } from 'react';
import { useStateLocale } from '../../store/context/locale';

import Modal from '../Modal'

// import { Container } from './styles';

function Invite({ visible, setIsVisible }) {
    const emailInput = useRef(null)
    const { locale } = useStateLocale()

    const invite_user = async () => {
        const email = emailInput.current.state.value;
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