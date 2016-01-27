import AppDispatcher from '../dispatchers/AppDispatcher'
import TodoConstants from '../constants/TodoConstants'

const TodoActions = {
	create(text) {
		AppDispatcher.dispatchAndLog({
			actionType: TodoConstants.create,
			text: text
		})
	},
	updateText(id, text) {
		AppDispatcher.dispatchAndLog({
			actionType: TodoConstants.updateText,
			id: id,
			text: text
		})
	},
	destroy(id) {
		AppDispatcher.dispatchAndLog({
			actionType: TodoConstants.destroy,
			id: id
		})
	},

	toggleComplete(todo) {
		let id = todo.id
		let actionType = todo.complete ?
			TodoConstants.undoComplete :
			TodoConstants.complete

		AppDispatcher.dispatchAndLog({
			actionType: actionType,
			id: id
		})
	},
	toggleCompleteAll() {
		AppDispatcher.dispatchAndLog({
			actionType: TodoConstants.toggleCompleteAll
		})
	},
	destroyCompleted() {
		AppDispatcher.dispatchAndLog({
			actionType: TodoConstants.destroyCompleted
		});
	}
}

export default TodoActions
