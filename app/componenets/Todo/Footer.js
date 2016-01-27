import React from 'react'

import TodoActions from '../../actions/TodoActions'

export default class TodoFooter extends React.Component {
	render() {
		let todos = this.props.todos
		let numOfTodos = Object.keys(todos).length

		if (numOfTodos === 0) {
			return null;
		}

		let completed = 0;
		for (let id in todos) {
			if (todos[id].complete) {
				completed++;
			}
		}

		let itemsLeft = numOfTodos - completed;
		let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
		itemsLeftPhrase += 'left';

		// Undefined and thus not rendered if no completed items are left.
		let clearCompletedButton;
		if (completed) {
			clearCompletedButton = (
				<button
					id="clear-completed"
					onClick={ this.onClearCompletedClick }
				>
					Clear completed ({ completed })
				</button>
			)
		}

		return (
			<div id="footer">
				<span id="todo-count">
          <strong>
						{ itemsLeft }
					</strong>
					{ itemsLeftPhrase }
        </span>
				{ clearCompletedButton }
			</div>
		)
	}

	onClearCompletedClick = () => {
		TodoActions.destroyCompleted()
	};
}

TodoFooter.propTypes = {
	todos: React.PropTypes.object.isRequired
}
