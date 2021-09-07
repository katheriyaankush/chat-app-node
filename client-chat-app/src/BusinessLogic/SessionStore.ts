import { observable, makeObservable, action } from "mobx";
import io from 'socket.io-client';


let socket;
const ENDPOINT = 'localhost:5000';


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
        return this.name = val;
    }
    @action updateRoom(val) {

        return this.room = val;
    }
    @action updateUsers(val) {
        return this.users = val;

    }

    @action initialConnection() {
        const room = this.room;
        const name = this.name;
        socket = io(ENDPOINT);
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                return this.error = true;
            }
        });



    }

    @action sessionMessage() {
        const messageA: any = [];
        socket.on('message', (message: any) => {
            messageA.push(message);
            this.messages = messageA;
        })

        socket.on("roomData", ({ users }) => {
            this.users = users;
        });
        return this.messages
    }

    @action setMessage(val) {
        return this.message = val;

    }

    @action sendMessage(event) {
        event.preventDefault();
        console.log("Ne", this.message)

        if (this.message) {
            socket.emit('sendMessage', this.message, () => this.message = '');
        }
    }

}