import React from "react";
import { observer } from "mobx-react";
import { Form } from "./Input.Styled";
import InputViewModel from "./InputViewModel";

let inputViewModel: InputViewModel;

export interface InputProps {
  messageStore: any;
  socket: any;
}

const Input: React.FC<InputProps> = observer(({ messageStore, socket }) => {
  inputViewModel = new InputViewModel(messageStore);

  return (
    <Form>
      <input
        type="text"
        placeholder="Type a message..."
        value={messageStore.message}
        onChange={({ target: { value } }) => inputViewModel.setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter"
            ? inputViewModel.sendMessage(event, socket)
            : null
        }
      />
      <button onClick={(e) => inputViewModel.sendMessage(e, socket)}>
        {" "}
        Send{" "}
      </button>
    </Form>
  );
});

export default Input;
