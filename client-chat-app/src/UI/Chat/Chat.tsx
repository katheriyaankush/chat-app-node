import React, { useEffect } from "react";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import { observer } from "mobx-react";
import { Redirect } from "react-router";
import { OuterContainer, Container } from "./Chat.Styled";
import io from "socket.io-client";
import ChatViewModel from "./ChatViewModel";

let chatViewModel: ChatViewModel;
let socket;

const Chat = observer(({ sessionStore, messageStore }) => {
  chatViewModel = new ChatViewModel(sessionStore);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    chatViewModel.initialConnection(socket);
    if (sessionStore.error) {
      alert("Somethig is wrong");
      chatViewModel.gotoJoinRoom();
    }
  }, [ENDPOINT, sessionStore.name, sessionStore.room]);

  useEffect(() => {
    chatViewModel.sessionMessage(socket);
  }, []);

  return (
    <OuterContainer>
      <Container>
        <InfoBar room={sessionStore.room} error={sessionStore.error} />

        <Messages messages={sessionStore.messages} name={sessionStore.name} />
        {!sessionStore.error ? (
          <Input messageStore={messageStore} socket={socket} />
        ) : null}
      </Container>
    </OuterContainer>
  );
});

export default Chat;
