import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import reducers  from './store/reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from "./components/MainRouter";

const store = createStore(combineReducers(reducers as any), applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <MainRouter />
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
