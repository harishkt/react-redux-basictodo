import { connect } from 'react-redux';
//Now import different actions
import { toggleTodo } from '../actions/actions';

//Import its respective Presentation Component
import TodoList from '../components/TodoList';
const getVisibleTodos = (todos, visibilityFilter) => {
	switch (visibilityFilter) {
		case 'SHOW_ALL':
			return todos;
		case 'ACTIVE':
			return todos.filter(t => !t.completed);
		case 'COMPLETED':
			return todos.filter(t => t.completed);
		default:
			return todos;
	}
}
const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => dispatch(toggleTodo(id))
	}
};
/*const mapDispatchToProps = {
	// Respective action
	onTodoClick: toggleTodo
};*/

const ToDoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default ToDoListContainer;