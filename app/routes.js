import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import CommonView from './componenets/common/CommonView'
import NotFound from './componenets/common/NotFound'
import Todo from './componenets/Todo'

const hashHistory = useRouterHistory(createHashHistory) ({ queryKey: false })

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={ CommonView }>
					<IndexRoute component={ Todo } />
				</Route>
				<Route path="/*" component={ NotFound } />
			</Router>
		)
	}
}
