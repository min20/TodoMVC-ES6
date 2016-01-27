'use strict';

import React from 'react'
import { render } from 'react-dom'

import Routes from './routes'

import '../static/css/base.css'

render(<Routes />, document.getElementById('todo'));
