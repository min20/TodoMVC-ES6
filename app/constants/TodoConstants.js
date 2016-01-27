import keyMirror from 'keymirror'

const TodoConstants = keyMirror({
	create: null,
	updateText: null,
	destroy: null,

	complete: null,
	undoComplete: null,
	toggleCompleteAll: null,
	destroyCompleted: null
})

export default TodoConstants
