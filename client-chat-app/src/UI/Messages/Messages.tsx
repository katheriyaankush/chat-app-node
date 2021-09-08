import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

export interface MessageProps {
  messages: any;
  name: any;
}

const Messages: React.FC<MessageProps> = ({ name, messages }) => {
  return (
    <ScrollToBottom className="messages">
      {messages
        ? messages.map((message: any, i: any) => (
            <div key={i}>
              <Message message={message} name={name} />
            </div>
          ))
        : null}
    </ScrollToBottom>
  );
};

export default Messages;
