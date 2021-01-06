import { type as getAllResultsType } from '../actions/getAllResults';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
		case getAllResultsType: {
			 return items;
		} 

        default:
            return state;
    }
}

export default reducer;
