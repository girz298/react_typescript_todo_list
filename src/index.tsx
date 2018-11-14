import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import reducers  from './store/reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import Root from "./components/Root";

console.log('REDUCERS ', reducers);

const store = createStore(combineReducers(reducers as any), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Root />
        </div>
    </Provider>,
    document.getElementById('root')
);
