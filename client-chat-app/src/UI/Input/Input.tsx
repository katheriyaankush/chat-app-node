import React from "react";
import { observer } from "mobx-react";
import { Form } from "./Input.Styled";

export interface InputProps {
  messageStore: any;
  socket: any;
}

const Input: React.FC<InputProps> = observer(({ messageStore, socket }) => (
  <Form>
    <input
      type="text"
      placeholder="Type a message..."
      value={messageStore.message}
      onChange={({ target: { value } }) => messageStore.setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? messageStore.sendMessage(event, socket) : null
      }
    />
    <button onClick={(e) => messageStore.sendMessage(e, socket)}> Send </button>
  </Form>
));

export default Input;
