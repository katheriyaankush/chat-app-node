import React, { useEffect } from "react";
import styled from 'styled-components';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from "../Messages/Messages";
import { observer } from 'mobx-react';
import { Redirect } from 'react-router';

const Chat = observer(({ sessionStore, messageStore }) => {
    const ENDPOINT = 'localhost:5000';
    useEffect(() => {
        sessionStore.initialConnection();
        if (sessionStore.error) {
            alert("Somethig is wrong");
        }
    }, [ENDPOINT, sessionStore.name, sessionStore.room]);

    useEffect(() => {
        sessionStore.sessionMessage();
    }, [])


    return (
        <OuterContainer>
            {sessionStore.error ? <Redirect to="/" /> : null}
            <Container>
                <InfoBar room={sessionStore.room} />
                <Messages messages={sessionStore.messages} name={sessionStore.name} />
                <Input messageStore={sessionStore} />
            </Container>
        </OuterContainer>
    )
})
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

