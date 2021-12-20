import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form as AntForm } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import Form from '../components/Form';
import Background from '../components/Background';
import Button from '../components/Button';


import { useAuth } from '../../../store/context/auth';
import { resetPassword, signin } from '../../../services/auth';

import socket from '../../../shared/socket';

import { Container } from './styles';
import { useStateLocale } from '../../../store/context/locale';

const { Item } = AntForm;

function SignIn() {
    const [isResetPassword, setIsResetPassword] = useState(false);
    const { auth, onLogin } = useAuth();

    const { locale } = useStateLocale()

    const onFinish = async (values) => {
        const { auth: isAuthenticated, user, token } = await signin({ ...values });
        if(isAuthenticated) {
            onLogin({ user, token });
            socket.on(user.id, (data) => console.log(data));
        }
    }

    const reset_password = async (values) => {
       const { success } = await resetPassword({ ...values })
       if(success) setIsResetPassword(false)
    }

    if(auth.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <Container>

            { !isResetPassword ?
                <Form
                    name="signin"
                    onFinish={onFinish}
                >
                    <h2 className="text-3xl text-gray-700 text-center mb-8">{locale['welcome-back']}</h2>

                    <Item
                        name="email"
                        rules={[{ required: true, message: locale['please-input-your-email'] }]}
                    >
                        <Input size="large" placeholder={locale['type-your-email']} prefix={<MailOutlined />} />
                    </Item>
                    <Item
                        name="password"
                        rules={[{ required: true, min: 6, message: locale['please-input-your-password'] }]}
                    >
                        <Input size="large" placeholder={locale['type-your-password']} prefix={<LockOutlined />} type="password" />
                    </Item>
                    <Button>
                        <span className="text-white text-xl">{locale['enter']}</span>
                    </Button>

                    <span onClick={() => setIsResetPassword(true)} className="text-gray-600 my-2 cursor-pointer text-sm">{locale['forgot-password']}</span>
                </Form>
                
                :
                <Form
                    name="reset"
                    onFinish={reset_password}
                >
                    <Item
                        name="email"
                        rules={[{ required: true, message: locale['please-input-your-email'] }]}
                    >
                        <Input size="large" placeholder={locale['type-your-email']} prefix={<MailOutlined />} />
                    </Item>

                    <Button>
                        <span className="text-white text-xl">{locale['enter']}</span>
                    </Button>

                    <span onClick={() => setIsResetPassword(false)} className="text-gray-600 my-2 cursor-pointer text-sm">{locale['go-back']}</span>
                </Form>
            }

            <p className="text-gray-400 text-lg text-center mt-8">{locale['dont-have-an-account-yet']} <Link to="/signup">{locale['register']}</Link></p>
            <Background />
            
        </Container>
    );
}

export default SignIn;