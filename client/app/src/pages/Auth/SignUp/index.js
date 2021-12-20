import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input, Form as AntForm } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import Form from '../components/Form';
import Background from '../components/Background';
import Button from '../components/Button';

import { signup } from '../../../services/auth';

import { Container } from './styles';
import { getWorkspace } from '../../../utils';
import { useStateLocale } from '../../../store/context/locale';

const { Item } = AntForm;

function SignUp() {
    const history = useHistory();
    const { locale } = useStateLocale()

    const onFinish = async (values) => {
        const account_id = getWorkspace();
        if(!account_id) return history.push('/');

        const { token } = await signup({ ...values, account_id });
        if(token) history.push('/login');
    }
    
    return (
      <Container>

            <Form 
                name="signup"
                onFinish={onFinish}
            >
                <h2 className="text-3xl text-gray-700 text-center mb-8">{locale['lets-start']}</h2>

                <Item
                     name="name"
                     rules={[{ required: true, min: 6, message: locale['must-contain-more-than'] + ' 6.' }]}
                >
                    <Input size="large" placeholder={locale['type-your-name']} prefix={<UserOutlined />} />
                </Item>
                <Item  
                    name="email"
                    rules={[{ required: true, message: locale['please-input-your-email'] }]}
                >
                    <Input size="large" placeholder={locale['type-your-email']} prefix={<MailOutlined />} type="email" />
                </Item>
                <Item
                    name="password"
                    rules={[{ required: true, min: 8, message: locale['must-contain-more-than'] + ' 8.' }]}
                >
                    <Input size="large" placeholder={locale['type-your-password']} prefix={<LockOutlined />} type="password" />
                </Item>

                <Button type="submit">
                    <span className="text-white text-xl">{locale['enter']}</span>
                </Button>
            </Form>

            <p className="text-gray-400 text-lg text-center mt-8">{locale['already-have-an-account']} <Link to="/login">{locale['enter']}</Link></p>

            <Background />
            
        </Container>
    );
}

export default SignUp;