import React from 'react';
import styled from 'styled-components';

export interface InputProps {
    setMessage: (value: any) => void,
    sendMessage: (event: any) => void
    message: any,

}

const Input: React.FC<InputProps> = ({ setMessage, sendMessage, message }) => (

    <Form>
        <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button onClick={e => sendMessage(e)}> Send </button>
    </Form>

)

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
