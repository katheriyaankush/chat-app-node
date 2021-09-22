import SessionStore from "../../BusinessLogic/SessionStore";

export default class ChatViewModel {
  private sessionStore: SessionStore;
  constructor(sessionStore: SessionStore) {
    this.sessionStore = sessionStore;
  }

  initialConnection(socket): void {
    this.sessionStore.initialConnection(socket);
  }

  sessionMessage(socket): void {
    this.sessionStore.sessionMessage(socket);
  }

  gotoJoinRoom(): void {
    this.sessionStore.isJoined(false);
  }
}
