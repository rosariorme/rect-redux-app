import { type as getDetailsById } from '../actions/getDetailsById';
import { type as deleteById } from '../actions/deleteById';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getDetailsById: {
            if (!payload) {
                return null;
            }

            return items.find(n => n.id === payload);
        }
		case deleteById: {
            if (!payload) {
                return null;
            }

            return items.filter((item, index) => index !== payload);
        }
        default:
            return state;
    }
}

export default reducer;
