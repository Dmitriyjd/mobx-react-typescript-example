import {observable} from 'mobx';

class Counter {
    @observable
    counter = 0;

    increaseCounter() {
        this.counter++
    }

    decreaseCounter() {
        this.counter--
    }
}

export default new Counter();
