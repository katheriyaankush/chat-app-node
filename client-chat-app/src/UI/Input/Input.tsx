import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';


export interface InputProps {
    messageStore: any

}

const Input: React.FC<InputProps> = observer(({ messageStore }) => (

    <Form>
        <input
            type="text"
            placeholder="Type a message..."
            value={messageStore.message}
            onChange={({ target: { value } }) => messageStore.setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? messageStore.sendMessage(event) : null}
        />
        <button onClick={e => messageStore.sendMessage(e)}> Send </button>
    </Form>

))

export default Input;

const Form: any = styled.form`

            display: flex;
            border-top: 2px solid #D3D3D3;

    >input {
                border: none;
            border-radius: 0;
            padding: 2%;
            width: 80%;
            font-size: 1.0em;
    }
    >button {
                color: #fff !important;
            text-transform: uppercase;
            text-decoration: none;
            background: #2979FF;
            padding: 10px;
            display: inline-block;
            border: none;
            width: 20%;
    }






            `;
