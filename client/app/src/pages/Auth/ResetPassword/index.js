import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input, Form as AntForm } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import Form from '../components/Form';
import Background from '../components/Background';
import Button from '../components/Button';

import { signup, updatePassword } from '../../../services/auth';

import { Container } from './styles';
import { useStateLocale } from '../../../store/context/locale';
import { updateUser } from '../../../services/users';
import { getUrlParam, getUserLogged } from '../../../utils';

const { Item } = AntForm;

function ResetPassword() {
    const [error, setError] = useState(null)
    const history = useHistory();
    const { locale } = useStateLocale()

    const onFinish = async (values) => {
        const { password, password_confirm } = values;
        const token = getUrlParam('token')

        if(password != password_confirm) return setError(locale['password-does-not-match'])
        await updatePassword(token, { password })
        history.push('/login')
    }
    
    return (
      <Container>

            <Form 
                name="reset"
                onFinish={onFinish}
            >
                <h2 className="text-3xl text-gray-700 text-center mb-8">{locale['reset-password']}</h2>

                <Item
                    name="password"
                    rules={[{ required: true, min: 8, message: locale['must-contain-more-than'] + ' 8.' }]}
                >
                    <Input size="large" placeholder={locale['type-your-password']} prefix={<LockOutlined />} type="password" />
                </Item>

                { error && <span className="text-red-500 self-start ml-3">{ error }</span> }
                <Item
                    name="password_confirm"
                    rules={[{ required: true, min: 8, message: locale['must-contain-more-than'] + ' 8.' }]}
                >
                    <Input size="large" onChange={() => setError(null)} placeholder={locale['type-your-password-again']} prefix={<LockOutlined />} type="password" />
                </Item>

                <Button type="submit">
                    <span className="text-white text-xl">{locale['confirm']}</span>
                </Button>
            </Form>

            <Background />
            
        </Container>
    );
}

export default ResetPassword;