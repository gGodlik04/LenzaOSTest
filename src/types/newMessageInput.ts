export interface INewMessageInput {
    textOfMessage: string[],
}

export enum NewMessageInputActionTypes {
    SET_TEXT = 'SET_TEXT',
    DELETE = 'DELETE',
}

export interface ISetNewMessageInputTextAction {
    type: NewMessageInputActionTypes.SET_TEXT;
    payload: string
}

export interface IDeleteNewMessageInputTextAction {
    type: NewMessageInputActionTypes.DELETE;
}





export type NewMessageInputAction = ISetNewMessageInputTextAction | IDeleteNewMessageInputTextAction