import React, {Component} from 'react';

class MartaDash extends Component {
    render() {
    const filter = this.props.filter;
    console.log(filter);
    return (
        <div>
            <button onClick={this.props.handleClick}>
                Click me!
            </button>
            {   this.props.marta ?
                this.props.marta.filter((item) => (item.DESTINATION === filter))
                .map((item, idx) => (
                <p key={idx}>{item.DESTINATION}: {item.STATION} ({item.WAITING_SECONDS})</p>)) 
                : <p>Nothing</p>}

        </div>
    );
    }
}

export default MartaDash;