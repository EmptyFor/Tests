import * as types from '../types/index';

export const dispatchRowNumber = (index) => ({
    type: types.GET_ROW_INDEX,
    index
})