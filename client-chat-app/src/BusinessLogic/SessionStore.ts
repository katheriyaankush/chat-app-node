import { observable, makeObservable, action } from "mobx";

export default class SessionStore {
  @observable name = "";
  @observable room = "";
  @observable users = "";
  @observable error = false;
  @observable messages = "";
  @observable message = "";

  constructor() {
    makeObservable(this);
  }

  @action updateName(val) {
    return (this.name = val);
  }
  @action updateRoom(val) {
    return (this.room = val);
  }
  @action updateUsers(val) {
    return (this.users = val);
  }

  @action initialConnection(socket) {
    const room = this.room;
    const name = this.name;
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        return (this.error = true);
      }
    });
  }

  @action sessionMessage(socket) {
    const messageA: any = [];
    socket.on("message", (message: any) => {
      messageA.push(message);
      this.messages = messageA;
    });

    socket.on("roomData", ({ users }) => {
      this.users = users;
    });
    return this.messages;
  }

  @action setMessage(val) {
    return (this.message = val);
  }


}
