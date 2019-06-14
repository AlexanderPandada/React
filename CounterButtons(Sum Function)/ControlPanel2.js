import React, { Component } from 'react'
import Counter2 from './Counter2'

const style = {
    margin: '20px'
}

class ControlPanel2 extends Component{
    constructor(props) {
        super(props)

        this.handleCounterUpdate = this.handleCounterUpdate.bind(this)

        this.initValue = [5, 6, 7]
        const initSum = this.initValue.reduce((a, b) => a + b, 0) // display the sum in the page the first time

        this.state = {
            sum: initSum
        }
    }

    handleCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue
        this.setState({
            sum: this.state.sum + valueChange
        })
    }

    render() {
        return (
            <div style={style}>
                {/*
                    'onUpdate' receives the values changed in Counter2,
                     using it to get sum then
                */}
                <Counter2 onUpdate={this.handleCounterUpdate} caption='First' initValue={this.initValue[0]} />
                <Counter2 onUpdate={this.handleCounterUpdate} caption='Second' initValue={this.initValue[1]} />
                <Counter2 onUpdate={this.handleCounterUpdate} caption='Third' initValue={this.initValue[2]} />
                <hr/>
                <div>Sum: {this.state.sum}</div>
            </div>
        )
    }
}

export default ControlPanel2