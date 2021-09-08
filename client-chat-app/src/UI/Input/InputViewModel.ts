import MessageStore from "../../BusinessLogic/MessageStore";

export default class InputViewModel {
  private messageStore: MessageStore;
  constructor(messageStore: MessageStore) {
    this.messageStore = messageStore;
  }

  setMessage(value): void {
    this.messageStore.setMessage(value);
  }
  sendMessage(event, socket): void {
    this.messageStore.sendMessage(event, socket);
  }
}
