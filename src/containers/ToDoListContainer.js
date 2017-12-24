import { connect } from 'react-redux';
//Now import different actions
import toggleTodo from '../actions';

//Import its respective Presentation Component
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
	todos: state.todos
});

const mapDispatchToProps = {
	// Respective action
	onTodoClick: toggleTodo
};

const ToDoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default ToDoListContainer;