import React from 'react';
import Button from './Button.js';
import NumDisplay from './NumDisplay.js';

// const BUTTONS = [
//     {text: '+',
//     onClick: actions.increment},
//     {text: '-',
//     onClick: actions.decrement}
// ]

const CounterList = ({counters, onIncrement, onDecrement, onAddCounter, onRemoval}) => {
    return (
        <div>
            <Button text="Add Counter" onClick={onAddCounter} id={0} />
            { Object.keys(counters).map(counterid => {
                return (
                <Counter
                    key={counterid}
                    count={counters[counterid].count}
                    onDecrement={(e) => {
                        e.preventDefault();
                        onDecrement(counterid)
                        }}
                    onIncrement={(e) => {
                        e.preventDefault();
                        onIncrement(counterid);
                        }}
                    onRemoval = {(e) => {
                        e.preventDefault();
                        onRemoval(counterid);
                    }}
                    />
            )})
        }
        </div>
    );
}

const Counter = ({count, onIncrement, onDecrement, onRemoval}) => (
    <div>
        <NumDisplay count={count} />
        <Button text="+" onClick={onIncrement} />
        <Button text="-" onClick={onDecrement} />
        <Button text="x" onClick={onRemoval} />
    </div>
)

export default CounterList;