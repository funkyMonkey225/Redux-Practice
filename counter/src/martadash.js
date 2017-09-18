import React, {Component} from 'react';

class MartaDash extends Component {
    render() {
    
    return (
        <div>
            <button onClick={this.props.handleClick}>
                Click me!
            </button>
        </div>
    );
    }
}

export default MartaDash;