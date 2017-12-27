import * as actionTypes from './actionTypes';

export const toggleTodo = (id) => ({
	type: actionTypes.TOGGLE_TODO,
	id
});

export const addToDo = (payload) => ({
	type: actionTypes.ADD_TODO,
	payload
});