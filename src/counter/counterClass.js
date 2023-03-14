import React, { Component } from "react";

import './counter.css';


class CounterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initial ? props.initial : 0
        }
    }

    _handleCounterDecrease = () => {
        this.setState({ count: this.state.count-1 });
    }

    _handleCounterIncrease = () => {
        this.setState({ count: this.state.count+1 });
    }

    render() {
        const { increase, decrease } = this.props.disableButton || {};
        return (
            <div className="counter-wrapper">
                <div className="counter-box">
                    <span className="counter-value">{this.state.count}</span>
                    <button 
                        className="counter-action counter-remove" disabled={decrease}
                        onClick={this._handleCounterDecrease}>-</button>
                    <button 
                        className="counter-action counter-add" disabled={increase}
                        onClick={this._handleCounterIncrease}>+</button>
                </div>
            </div>
        )
    }
}

export default CounterComponent;