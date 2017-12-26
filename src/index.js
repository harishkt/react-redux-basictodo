import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducer);
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
console.log(store.getState());
