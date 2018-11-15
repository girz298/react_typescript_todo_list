import projects from './todo/projects';
import users from './todo/users';
import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import {reducer} from "redux-form";

const reducers = {
    projects,
    users,
};


export default (history: any) => combineReducers({
    form: reducer,
    router: connectRouter(history),
    ...reducers
})