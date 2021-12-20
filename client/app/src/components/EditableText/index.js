import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { Container, Actions } from './styles';

import { useFocus } from '../../hooks';
import { onCtrlEnter } from '../../utils';

function EditableText({ text, onChange, showIcon = true, auto = false }) {
    const [isEditable, setIsEditable] = useState(false);
    const [inputRef, setInputFocus] = useFocus()

    const handleEdit = () => {
        !isEditable && setInputFocus();
        setIsEditable(!isEditable);
    }

    return (
        <Container isEditable={isEditable} className="flex items-center">
            <span onClick={() => { auto && setIsEditable(true)}} className="editable-text flex justify-start items-center mx-1 w-full cursor-pointer">
                {text}
                {showIcon && <EditOutlined onClick={handleEdit} /> }
            </span>
            <Input 
                ref={inputRef} 
                placeholder={text}
                onKeyDown={(e) => onCtrlEnter(e, () => { 
                        onChange(e.target.value)
                        e.target.value = ''
                    }
                )}
                onBlur={handleEdit} 
                bordered={false} 
            />

            {isEditable && <span className="text-xs text-gray-400 whitespace-nowrap">ctrl + enter para salvar</span>}

            <Actions>
                <Button>Adicionar</Button>
            </Actions>
        </Container>
    );
}

export default EditableText;