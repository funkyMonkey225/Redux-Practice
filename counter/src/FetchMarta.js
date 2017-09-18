import axios from 'axios';
const MARTA_URL='http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1'

// Must have key called 'payload' 
const fetchData = () => {
    const request = axios.get(MARTA_URL);
    return {
        type: 'MARTA',
        payload: request
    }
}

export default fetchData;