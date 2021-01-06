import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import details from './reducers/details';

const reducer = combineReducers({
    results,
    details,
});

const store = createStore(reducer);

export default store;
