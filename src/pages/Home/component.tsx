import * as React from 'react'
import { observer } from 'mobx-react';
import counter from '../../store/counter'

@observer
class Home extends React.PureComponent {
    onIncrement = () => {
        counter.increaseCounter();
    };

    onDecrement = () => {
        counter.decreaseCounter()
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.onDecrement}
                >
                    -
                </button>
                <span>{counter.counter}</span>
                <button
                    onClick={this.onIncrement}
                >
                    +
                </button>
            </div>
        )
    }
}

export default Home
