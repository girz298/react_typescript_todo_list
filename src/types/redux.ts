import {AnyAction, Dispatch} from "redux";

export type ReturnDispatchType = (dispatch: Dispatch<AnyAction>) => void;