import React from "react";
import {
  SentTextRight,
  MessageContainer,
  MessageBoxBlue,
  SendText,
  MessageContainerRight,
  MessageBoxGray,
} from "./Message.Styled";
import ReactEmoji from "react-emoji";

export interface MsgProps {
  message: {
    text: string;
    user: string;
    time: number;
  };
  name: string;
}

const Message: React.FC<MsgProps> = ({
  message: { text, user, time },
  name,
}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div>
      <SentTextRight>
        {" "}
        <p>{time} </p>{" "}
        <p style={{ marginLeft: "8px", color: "#5e5e5c", fontWeight: "bold" }}>
          {" "}
          Me
        </p>{" "}
      </SentTextRight>
      <MessageContainer>
        <MessageBoxBlue>
          <p> {ReactEmoji.emojify(text)} </p>
        </MessageBoxBlue>
      </MessageContainer>
    </div>
  ) : (
    <div>
      <SendText>
        {" "}
        <p>{time} </p>{" "}
        <p style={{ marginLeft: "5px", color: "#5e5e5c", fontWeight: "bold" }}>
          {" "}
          {user}
        </p>{" "}
      </SendText>
      <MessageContainerRight>
        <MessageBoxGray>
          <p> {ReactEmoji.emojify(text)} </p>
        </MessageBoxGray>
      </MessageContainerRight>
    </div>
  );
};
export default Message;
