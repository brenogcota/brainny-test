import React, { useState } from 'react';
import { ShareAltOutlined } from '@ant-design/icons'; 

import { copyToClipBoard } from '../../utils';
// import { Container } from './styles';
import { colors } from '../../shared/constants';
import { useStateLocale } from '../../store/context/locale';

const { primary } = colors;

function Share({ link }) {
    const [copied, setCopied] = useState(false);
    const { locale } = useStateLocale()
    const onHandle = () => {
        copyToClipBoard(link);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    if(!link) {
        return <div></div>
    }

    return (
        <div>
            { copied && <span 
                        className="text-sm py-1 px-2 rounded bg-white z-10 absolute"
                        style={{ border: `1px dashed ${primary}`, color: primary}}
                      >{locale['copy']}</span> }
            <ShareAltOutlined 
                className="text-xl text-gray-600 cursor-pointer p-1 ml-2 rounded hover:bg-gray-200"
                onClick={onHandle} 
            />
        </div>
    );
}

export default Share;