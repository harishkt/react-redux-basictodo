import visibilityFilter from './visibilityFilterReducer';
import todos from './todoReducer';

const initState = {
	todos: [
		{
			id: 1,
			text: 'Learn Redux',
			completed: true
		},
		{
			id: 2,
			text: 'Read Redux Docs',
			completed: false
		},
		{
			id: 3,
			text: 'Complete Basic Section',
			completed: false
		}
	],
	visibilityFilter: 'SHOW_ALL'
};

const newCombineReducers = (reducers) => {
	return (state = initState, action) => {
		return Object.keys(reducers).reduce(
			(nextState, key) => {
				nextState[key] = reducers[key](state[key], action);
				return nextState;
			}, {});
	};
};

const todoApp = newCombineReducers({
	todos,
	visibilityFilter
});
export default todoApp;