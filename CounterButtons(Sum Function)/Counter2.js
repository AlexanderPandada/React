import React, { Component } from 'react'

const style = {
    margin: '20px'
}

class Counter2 extends Component {
    constructor(props) {
        super(props)

        this.handleOnClickIncrementButton = this.handleOnClickIncrementButton.bind(this)
        this.handleOnClickDecrementButton = this.handleOnClickDecrementButton.bind(this)

        this.state = {
            count: props.initValue
        }
    }

    handleOnClickIncrementButton() {
        this.updateOperator(true)
    }

    handleOnClickDecrementButton() {
        this.updateOperator(false)
    }

    updateOperator(isIncreased) {
        const previousValue = this.state.count
        const newValue = isIncreased ? previousValue + 1 : previousValue - 1
        this.setState({
            count: newValue
        })
        // this allow Counter2 pass by the CounterPanel2
        // props 永远都是给‘外部external’传递参数用的
       this.props.onUpdate(newValue, previousValue)
    }

    render() {
        const { caption } = this.props
        return (
            <div style={style}>
                <button onClick={this.handleOnClickIncrementButton}>+</button>
                <button onClick={this.handleOnClickDecrementButton}>-</button>
                <span> {caption} Count: {this.state.count}</span>
            </div>
        )
    }
}

export default Counter2