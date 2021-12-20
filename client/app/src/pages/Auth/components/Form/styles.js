import styled from 'styled-components';
import { Form as AntForm } from 'antd';

export const Container = styled(AntForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    min-height: 267px;
    margin: 10% auto 0;
    background: #FFF;
    box-shadow: 0 0 60px 5px rgba(0,0,0,.2);
    padding: 1rem;
    border-radius: 6px;
    z-index: 10;

    .ant-form-item {
        width: 90%;
    }

    @media screen and (min-width: 960px) {
        max-width: 36%;
    }
`;
