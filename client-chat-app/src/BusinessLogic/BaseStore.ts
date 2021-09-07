import SessionStore from './SessionStore';
import MessageStore from './MessageStore';



export default class BaseStore {

    messageStore!: MessageStore;
    sessionStore!: SessionStore;

    constructor() { }

    initialize() {
        this.sessionStore = new SessionStore();
        //  this.messageStore = new MessageStore(this.sessionStore);
    }
}