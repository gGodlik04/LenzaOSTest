export interface INewMessageInput {
    textOfMessage: string[],
}

export enum NewMessageInputActionTypes {
    SET_TEXT = 'SET_TEXT',
}

export interface ISetNewMessageInputTextAction {
    type: NewMessageInputActionTypes.SET_TEXT;
    payload: string
}





export type NewMessageInputAction = ISetNewMessageInputTextAction 