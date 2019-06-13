import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor (props) {
        super(props)
        this.handleOnClickButton = this.handleOnClickButton.bind(this)
        this.state = {count: 0}
    }

    handleOnClickButton() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const counterStyle = {
            margin: '16px',
            border: '3px solid red'
        }

        return (
            <div>
                <button onClick={this.handleOnClickButton} > Click Me </button>
                <div style={counterStyle}>
                    Click Count: <span id="clickCount">{this.state.count}</span>
                </div>
            </div>
        )
    }
}

export default ClickCounter