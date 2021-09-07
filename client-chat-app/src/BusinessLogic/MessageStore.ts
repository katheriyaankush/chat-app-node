import { observable, makeObservable, action } from "mobx";
import io from 'socket.io-client';
import SessionStore from './SessionStore';

let socket;
const ENDPOINT = 'localhost:5000';

export default class MessageStore {

    @observable message = "";
    @observable error = false;
    @observable messages = "";
    @observable users = "";

    // private sessionStore: SessionStore;

    constructor() {
        makeObservable(this)
        //   this.setSessionId(sessionStore)
    }

    @action setMessage(val) {
        return this.message = val;

    }


    // @action setSessionId(value: SessionStore) {
    //     this.sessionStore = value;
    //     this.socketId = this.sessionStore.socketId;
    // }

    @action sendMessage(event) {
        event.preventDefault();

        if (this.message) {
            socket.emit('sendMessage', this.message, () => this.message = '');
        }
    }

}