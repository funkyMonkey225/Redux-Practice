import Guid from 'guid';
import axios from 'axios';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';

const MARTA_URL='http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1';

export const FETCH_MARTA = 'FETCH_MARTA';
// export const FETCH_MARTA_SUCCESS = 'FETCH_MARTA_SUCCESS';

// const fetchDataSuccess = (items) => ({
//     type: FETCH_MARTA_SUCCESS,
//     items,
// });

export const fetchData = () => {
    const request = axios.get(MARTA_URL)
    return {
        type: FETCH_MARTA,
        payload: request
    }
}

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