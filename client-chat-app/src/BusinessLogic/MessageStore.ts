import { observable, makeObservable, action } from "mobx";

export default class MessageStore {
  @observable message = "";

  constructor() {
    makeObservable(this);
  }

  @action setMessage(val) {
    return (this.message = val);
  }

  @action sendMessage(event, socket) {
    event.preventDefault();
    if (this.message) {
      socket.emit("sendMessage", this.message, () => (this.message = ""));
    }
  }
}
