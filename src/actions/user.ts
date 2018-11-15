import {Dispatch} from "redux";
import { push } from 'react-router-redux';
import {GuestRoutes} from "../constants/urls";
import {ReturnDispatchType} from "../types/redux";
import * as url from "url";
url.URLSearchParams = URLSearchParams;
import {JWTApi} from '../api/generated/todo';
import {stopSubmit} from "redux-form";
import {FORM_NAME, IFormFields} from "../components/LoginPage/LoginForm";

export type LoginActionType = (username: string, password: string) => ReturnDispatchType;

export const loginAction: LoginActionType = (username: string, password: string) => async (dispatch: Dispatch) => {
    const api = new JWTApi({basePath: 'http://localhost:8080'});
    try {
        (await api.apiTokenPost(username, password))
            .json()
            .then((data: any)=> {
            localStorage.setItem('token', data.token);
            console.log(data);
            dispatch({type: 'Logged In'});
            dispatch(push(GuestRoutes.HOME_PAGE));
        });
    } catch (e) {
        const errors: IFormFields = {
            password: 'Bad credentials.',
            username: 'Bad credentials.',
        };
        dispatch(stopSubmit(FORM_NAME, errors));
        dispatch({type: 'Login failed'});
    }
};