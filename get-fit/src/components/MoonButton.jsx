import React, { Component } from 'react';

class MoonButton extends Component {
    constructor(){
        super();
        this.state = {
            darkMode:true,
            hovers:0,
        }
    };
    changeMode(){
        console.log(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.props.changeMode}>Day Mode/ Night Mode</button>
            </div>
        );
    }
}

export default MoonButton;