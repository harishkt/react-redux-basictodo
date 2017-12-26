export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});

export const setVisibility = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});