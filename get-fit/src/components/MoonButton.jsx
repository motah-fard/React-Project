import React, { Component } from 'react';

class MoonButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.changeMode}>Day Mode/ Night Mode</button>
            </div>
        );
    }
}

export default MoonButton;