import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import styled from 'styled-components';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from "../Messages/Messages";
import { observer } from 'mobx-react';
import ChatStore from '../../stores/ChatStore'

const chatStore = new ChatStore();



export interface ChatProps {
    location: any,
    socket: any,
    message: any,
    ScrollToBottom: any,
    time: number,
    messages: any,

}
let socket;



const Chat: React.FC<ChatProps> = observer(({ location }) => {


    const [message, setMessage] = useState<any>('');
    const [messages, setMessages] = useState<any>('');
    //  const [users, setUsers] = useState<any>('');

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        chatStore.updateName(name);
        chatStore.updateRoom(room);
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        })

        socket.on("roomData", ({ users }) => {
            // setUsers(users);
            chatStore.updateUsers(users)
        });
    }, [])


    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <OuterContainer>
            <Container>
                <InfoBar room={chatStore.room} />
                <Messages messages={messages} name={chatStore.name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </Container>
        </OuterContainer>
    )
}
)
export default Chat;


const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1A1A1D;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 100%;
    }
`;


const Container = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 8px;
    height: 98%;
    width: 45%;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        height: 100%;
            }
    @media (min-width: 480px) and (max-width: 1200px) {
        width: 45%;
    }
`;

