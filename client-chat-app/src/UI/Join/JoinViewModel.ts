import React, { ChangeEvent } from "react";
import SessionStore from "../../BusinessLogic/SessionStore";

export default class JoinViewModel {
  private sessionStore: SessionStore;
  constructor(sessionStore: SessionStore) {
    this.sessionStore = sessionStore;
  }

  updateName(event: ChangeEvent<HTMLInputElement>): void {
    this.sessionStore.updateName(event.target.value);
  }

  updateRoom(event: ChangeEvent<HTMLInputElement>): void {
    this.sessionStore.updateRoom(event.target.value);
  }

  gotoChatRoom(): void {
    if (this.sessionStore.name || this.sessionStore.room) {
      this.sessionStore.isJoined(true);
    }
  }
}
