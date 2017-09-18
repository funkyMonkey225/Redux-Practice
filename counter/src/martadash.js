import React, {Component} from 'react';

class MartaDash extends Component {
    render() {
    
    return (
        <div>
            <button onClick={this.props.handleClick}>
                Click me!
            </button>
            {this.props.state.map((item, idx) => {
                return (<p key={idx}>{item.DESTINATION}</p>)
            })}

        </div>
    );
    }
}

export default MartaDash;