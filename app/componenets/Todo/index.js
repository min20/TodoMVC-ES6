import React from 'react'

import TodoStore from '../../stores/TodoStore'

import TodoHeader from './Header'
import TodoItemList from './ItemList'
import TodoFooter from './Footer'

export default class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state = getTodoState()
	}

	render() {
		return (
			<section id="todoapp">
				<TodoHeader />
				<TodoItemList
					todos={ this.state.todos }
					areAllComplete={ this.state.areAllComplete }
				/>
				<TodoFooter todos={ this.state.todos } />
			</section>
		)
	}

	componentDidMount = () => {
		TodoStore.addChangeListener(this.onChange)
	};

	componentWillUnmount = () => {
		TodoStore.removeChangeListener(this.onChange)
	};

	onChange = () => {
		this.setState(getTodoState())
	};
}

function getTodoState() {
	return {
		todos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete()
	}
}
