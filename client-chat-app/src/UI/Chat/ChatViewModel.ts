import React from "react";
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
}
