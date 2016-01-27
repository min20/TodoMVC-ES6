import React from 'react'

import TodoActions from '../../actions/TodoActions'

import TodoTextInput from './TodoTextInput'

export default class TodoHeader extends React.Component {
	render() {
		return (
			<div id="header">
				<h1>TODOo.</h1>
				<TodoTextInput
					id="new-todo"
					placeholder="New Todo"
					onSave={ this.onSave }
				/>
			</div>
		)
	}

	onSave(text) {
		if (text) {
			TodoActions.create(text)
		}
	}
}
