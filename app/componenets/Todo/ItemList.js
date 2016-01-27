import React from 'react'

import TodoActions from '../../actions/TodoActions'

import TodoItem from './TodoItem'

export default class TodoItemList extends React.Component {
	render() {
		let todos = this.props.todos;
		let todoItems = [];

		for (let id in todos) {
			todoItems.push(
				<TodoItem
					key={ id }
					todo={ todos[id] }
				/>
			);
		}

		return (
			<div id="main">
				<input
					id="toggle-all"
					type="checkbox"
					onChange={ this.onToggleCompleteAll }
					checked={ this.props.areAllComplete ? 'checked' : '' }
				/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul id="todo-list">
					{ todoItems }
				</ul>
			</div>
		)
	}

	onToggleCompleteAll = () => {
		TodoActions.toggleCompleteAll()
	};
}

TodoItemList.propTypes = {
	todos: React.PropTypes.object.isRequired,
	areAllComplete: React.PropTypes.bool.isRequired
}
