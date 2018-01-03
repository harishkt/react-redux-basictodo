import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
const logger = store => next => action => {
	console.group(action.type);
	console.info(`Dispatching action - ${JSON.stringify(action)}`);
	let result = next(action);
	console.log(`next state is ${JSON.stringify(store.getState())}`);
	console.groupEnd();
	return result;
}
const store = createStore(reducer, applyMiddleware(thunkMiddleWare, logger));
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();

