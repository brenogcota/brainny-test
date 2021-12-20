import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Input, Select, Switch } from 'antd';
import { LeftOutlined, CameraOutlined } from '@ant-design/icons';

import { Container, Wrapper } from './styles';


import Avatar from '../../components/Avatar'
import FileInput from '../../components/FileInput'

import { useStateLocale } from '../../store/context/locale'
import { getUser, updateAvatar } from '../../services/users';
import { getUserLogged, setUserLogged } from '../../utils';

const { Option } = Select;

function Settings() {
    const [user, setUser] = useState(getUserLogged())
    const { locale, handleLocale } = useStateLocale()
    const { id } = getUserLogged();

    useEffect(() => {
        get_user()
    }, [])

    const get_user = async () => {
        setUser(await getUser(id))
    }

    const update_avatar = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        const user = await updateAvatar(id, formData)
        setUser(user);
        setUserLogged(user);
    }

    return (
        <Wrapper>
            <Container>
                <Link to="/boards"> <LeftOutlined style={{ fontSize: '28px', color: '#666', margin: '10px 0' }} /> </Link><br/>
                <h1 className="text-4xl text-gray-600">{locale['settings']}</h1>

                <div className="my-3 p-3 bg-gray-100 rounded">
                    <h2 className="text-xl text-gray-500">{locale['personal-info']}</h2>

                    <div className="flex items-end">
                        <Avatar name={user.name} src={user.avatar_url} background={user.avatar_color} style={{ margin: '16px 0', fontSize: '28px', width: '80px', height: '80px'}}></Avatar>
                        <FileInput id="file" Icon={CameraOutlined} onChange={update_avatar} />
                    </div>

                    <span className="mt-4 mb-6 text-gray-600">{locale['full-name']}</span>
                    <Input value={user.name} />
                    <br/><br/>
                    <span className="mt-4 mb-6 text-gray-600">{locale['password']}</span>
                    <Input value={user.password} type="password" />

                    <footer className="pt-2 mt-6 border-t border-t-2 border-gray-300">
                        <Button type="primary" style={{ marginLeft: '90%'}}>Salvar</Button>
                    </footer>
                </div>

                <div className="my-3 p-3 bg-gray-100 rounded">
                    <h2 className="text-xl text-gray-500">{locale['language-and-region']}</h2>

                    <Select
                        defaultValue={locale['language']}
                        onChange={handleLocale}
                    >
                        <Option value="0">{locale['portuguese']}</Option>
                        <Option value="1">{locale['english']}</Option>
                    </Select>
                </div>

                <div className="my-3 p-3 bg-gray-100 rounded">
                    <h2 className="text-xl text-gray-500">{locale['preferences']}</h2>

                    <p className="text-lg text-gray-600 my-2"><Switch disabled /> Dark mode</p>
                    <p className="text-lg text-gray-600 my-2"><Switch disabled defaultChecked /> List</p>
                </div>

            </Container>
        </Wrapper>
    );
}

export default Settings;