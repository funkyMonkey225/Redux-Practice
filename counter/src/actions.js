import Guid from 'guid';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';

export const increment = (id) => {
    return {type: INCREMENT, id}
}

export const decrement = (id) => {
    return {type: DECREMENT, id}
}

export const addCounter = (id) => {
    return {type: ADD_COUNTER, id: Guid.raw(), count: 0}
}

export const removeCounter = (id) => {
    return {type: REMOVE_COUNTER, id}
}