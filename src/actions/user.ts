import {Dispatch} from "redux";
import { push } from 'react-router-redux';
import {GuestRoutes} from "../constants/urls";
import {ReturnDispatchType} from "../types/redux";

export type LoginActionType = (username: string, password: string) => ReturnDispatchType;

export const loginAction: LoginActionType = () => (dispatch: Dispatch) => {
    console.log('LOGGED IN');
    dispatch({type: 'Logged In'});
    dispatch(push(GuestRoutes.HOME_PAGE));
};