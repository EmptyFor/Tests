import * as types from '../types/index';

const initState = {
    index: '',
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_ROW_INDEX:
            return {
                ...state,
                index: action.index
            }

        default:
            return state;
    };
};
