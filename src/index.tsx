import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import createRootReducer  from './store/reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import MainRouter from "./components/MainRouter";
import {ConnectedRouter, routerMiddleware} from "react-router-redux";
import {createBrowserHistory} from "history";


const history = createBrowserHistory();
const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <MainRouter />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
