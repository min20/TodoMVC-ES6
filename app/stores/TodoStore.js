import assign from 'object-assign'

import Store from './Store'

import AppDispatcher from '../dispatchers/AppDispatcher'
import TodoConstants from '../constants/TodoConstants'

var todos = {}

function createTodo(text) {
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)

	todos[id] = {
		id: id,
		complete: false,
		text: text
	}
}
function update(id, updates) {
	todos[id] = assign({}, todos[id], updates)
}
function updateAll(updates) {
	for (let id in todos) {
		update(id, updates)
	}
}
function destroy(id) {
	delete todos[id]
}
function destroyCompleted() {
	for (let id in todos) {
		if (todos[id].complete) {
			destroy(id)
		}
	}
}

class TodoStore extends Store {
	getAll() {
		return todos
	}

	areAllComplete() {
		for (let id in todos) {
			if (!todos[id].complete) {
				return false
			}
		}

		return true
	}
}

const todoStore = new TodoStore()
export default todoStore

AppDispatcher.register(function(action) {
	let text

	switch (action.actionType) {
		case TodoConstants.create:
			text = action.text.trim()
			if (text) {
				createTodo(text)
				todoStore.emitChange()
			}
			break

		case TodoConstants.updateText:
			text = action.text.trim()
			if (text) {
				update(action.id, {
					text: text
				})
				todoStore.emitChange()
			}
			break

		case TodoConstants.destroy:
			destroy(action.id)
			todoStore.emitChange()
			break

		case TodoConstants.complete:
			update(action.id, {
				complete: true
			})
			todoStore.emitChange()
			break

		case TodoConstants.undoComplete:
			update(action.id, {
				complete: false
			})
			todoStore.emitChange()
			break

		case TodoConstants.toggleCompleteAll:
			if (todoStore.areAllComplete()) {
				updateAll({
					complete: false
				});
			} else {
				updateAll({
					complete: true
				});
			}
			todoStore.emitChange()
			break

		case TodoConstants.destroyCompleted:
			destroyCompleted()
			todoStore.emitChange()
			break

		default:
			return
	}
})
