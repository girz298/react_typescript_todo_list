import {Dispatch} from "redux";
import { push } from 'react-router-redux';
import {GuestRoutes} from "../constants/urls";

export type LoginActionType = (username: string, password: string) => void;

export const loginAction: LoginActionType = () => {
    return (dispatch: Dispatch) => {
        console.log('LOGGED IN');
        dispatch({type: 'Logged In'});
        dispatch(push(GuestRoutes.HOME_PAGE));
    };
};