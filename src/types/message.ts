



export interface IMessageState {
    message: any[];
    loading: boolean;
    error: null | string;

}

export enum MessageActionTypes {
    FETCH_MESSAGE = 'FETCH_MESSAGE',
    FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS',
    FETCH_MESSAGE_ERROR = 'FETCH_MESSAGE_ERROR',
}

export interface IFetchMessageAction {
    type: MessageActionTypes.FETCH_MESSAGE;
}

export interface IFetchMessageSuccessAction {
    type: MessageActionTypes.FETCH_MESSAGE_SUCCESS;
    payload: any[]
}

export interface IFetchMessageErrorAction {
    type: MessageActionTypes.FETCH_MESSAGE_ERROR;
    payload: string;
}

export type MessageAction = IFetchMessageAction | IFetchMessageSuccessAction | IFetchMessageErrorAction