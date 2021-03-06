import React from 'react'
import classNames from 'classnames'

import TodoActions from '../../actions/TodoActions'

import TodoTextInput from './TodoTextInput'

export default class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEditing: false
		}
	}

	render() {
		let todo = this.props.todo
		let input;

		if (this.state.isEditing) {
			input = (
				<TodoTextInput
					className="edit"
					onSave={ this.onSave }
					value={ todo.text }
				/>
			)
		}

		return (
			<li
				className={ classNames({
					'completed': todo.complete,
          'editing': this.state.isEditing
				}) }
				key={ todo.id }
			>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={ todo.complete }
						onChange={ this.onToggleComplete }
					/>
					<label onDoubleClick={ this.onDoubleClick }>
						{ todo.text }
					</label>
					<button
						className="destroy"
						onClick={ this.onDestroyClick }
					/>
				</div>
				{ input }
			</li>
		)
	}

	onToggleComplete = () => {
		TodoActions.toggleComplete(this.props.todo)
	};

	onDoubleClick = () => {
		this.setState({
			isEditing: true
		})
	};

	onSave = text => {
		TodoActions.updateText(this.props.todo.id, text)
		this.setState({
			isEditing: false
		})
	};

	onDestroyClick = () => {
		TodoActions.destroy(this.props.todo.id)
	};
}

TodoItem.propTypes = {
	todo: React.PropTypes.object.isRequired
}
