import * as actionTypes from './actionTypes';

export const setVisibility = (filter) => ({
	type: actionTypes.SET_VISIBILITY_FILTER,
	filter
});