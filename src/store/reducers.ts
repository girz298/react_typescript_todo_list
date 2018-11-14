import projects from './todo/projects';
import users from './todo/users';
import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'

const reducers = {
    projects,
    users,
};


export default (history: any) => combineReducers({
    router: connectRouter(history),
    ...reducers
})