// {type: 'INCREMENT'}
// {type: 'DECREMENT'}
const counter = (state, action) => {
    if (typeof state === 'undefined') {
        return 0;
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = Redux.createStore(counter);
const valueEl = document.querySelector('#value');
const inc = document.querySelector('#increment');
const dec = document.querySelector('#decrement');
const incIfOdd = document.querySelector('#incrementIfOdd');
const incAsync = document.querySelector('#incrementAsync');

const render = () => {
    // console.log(store.getState());
    valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

inc.addEventListener('click', () => store.dispatch({type: 'INCREMENT'}));
dec.addEventListener('click', () => store.dispatch({type: 'DECREMENT'}));

incIfOdd.addEventListener('click', () => {
  if (store.getState() % 2 !== 0) {
    store.dispatch({type: 'INCREMENT'});  
  }
});

incAsync.addEventListener('click', () => {
  setTimeout(() => {
    store.dispatch({type: 'INCREMENT'});
  }, 2000);
});

// store.dispatch({type: 'INCREMENT'})