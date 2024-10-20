import { makeAutoObservable } from "mobx";

class Counter {
    public count = 0;
    public timer = 60;
    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }

    reset() {
        this.count = 0;
    }

    get total() {
        return `count + timer = ${this.count + this.timer}`
    }

}

export default new Counter();