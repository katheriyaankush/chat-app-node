import { observable, makeObservable, action } from "mobx";

export default class ChatStore {
    @observable name = "";
    @observable room = "";
    @observable users = "";



    constructor() {
        makeObservable(this)
    }

    @action updateName(val) {
        console.log("Hii.", val);
        return this.name = val;
    }
    @action updateRoom(val) {
        console.log("Hii.", val);

        return this.room = val;
    }
    @action updateUsers(val) {

        return this.users = val;

    }

}