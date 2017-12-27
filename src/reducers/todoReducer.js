import * as actionTypes from '../actions/actionTypes';
const todos = (todos , action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_TODO:
			return todos.map(todo =>
				(todo.id === action.id)
					? { ...todo, completed: !todo.completed }
					: todo
			);
		case actionTypes.ADD_TODO:
			return [
				...todos,
				action.payload
			];
		default:
			return todos;
	}
};
export default todos;