import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return { counter: state.counter + 20 };
  }

  if (action.type === 'decrement') {
    if (state.counter - 20 < 0) {
      return { counter: 0 };
    }
    if (state.counter - 20 > action.count) {
      return { counter: action.count - 20 };
    }
    return { counter: state.counter - 20 };
  }

  if (action.type === 'search') {
    return { counter: action.value - 8 };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
