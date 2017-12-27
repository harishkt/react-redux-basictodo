import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToDo, toggleTodo} from "../actions/todoActions";

const AddToDo = ({ length, onSubmit }) => {
	let input;
	return(
			<form onSubmit={e => {
				e.preventDefault();
				if (input === null) {
					return
				}
				onSubmit({ id: length + 1, completed: false, text: input.value });
				input.value = ''
			}} >
				<label> Enter Your Todo item : </label>
				<input
					type='text'
					ref={ node => { input = node }}
				/>
				<button type='submit'>
				Add
				</button>
			</form>
	)
}
const mapStateToProps = (state) => ({
	length: state.todos.length
});
const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (payload) => dispatch(addToDo(payload))
	}
};
const AddToDoContainer = connect(mapStateToProps,mapDispatchToProps)(AddToDo);
export default AddToDoContainer;
