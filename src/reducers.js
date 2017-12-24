import { combineReducers } from 'redux';

const initState = [
	{
		id: 1,
		text: 'Learn Redux',
		completed: false
	},
	{
		id: 2,
		text: 'Read Redux Docs',
		completed: false
	}
]
const todos = (state = initState, action) => {
	switch (action.type) {
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
				? { ...todo, completed: !todo.completed }
				: todo
			);
		default:
			return state;
	}
};
const todoApp = combineReducers({
	todos
});
export default todoApp;