import { Dispatcher } from 'flux'

class AppDispatcher extends Dispatcher {
	dispatchAndLog(action) {
		this.dispatch(action)
		console.log(action)
	}
}

export default new AppDispatcher()
