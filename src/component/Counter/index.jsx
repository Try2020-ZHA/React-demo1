import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, propsSize: 0 };
    }

     onIncrease = () => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
        this.props.addNumber(1);
    }

    onDecrease = () => {
        this.setState((prevState) => ({ value: prevState.value - 1 }));
        this.props.subNumber(1);
    }

    render() {
        // const { value } = this.props
        return (
            <p>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </p>
        );
    }

    static getDerivedStateFromProps(props, state) {
        if (state.propsSize !== props.totalSize) {
            return { value: 0, propsSize: props.totalSize }
        }
        return null;
    }

    componentWillUnmount(){
        this.props.subNumber(this.state.value);
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    addNumber: PropTypes.func.isRequired,
    subNumber: PropTypes.func.isRequired
  }

export default Counter;