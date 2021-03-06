import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import Order from './Order'
import OrderItem from './OrderItem'

import { Router, Route, browserHistory } from 'react-router';

render((
		<Router history={ browserHistory }>
	    	<Route path="/home" component={App}/>
	    	<Route path="/order" component={Order}/>
	    	<Route path="/order/:id" component={OrderItem}/>

 		</Router>
 		),document.querySelector('#simplex'));
