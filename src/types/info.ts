
export interface IInfo {
    title: string;
    chatId: string;

}

export enum InfoActionTypes {
    SET_TITLE = 'SET_TITLE',
    SET_CHATID = 'SET_CHATID', 
}

export interface ISetTitleAction {
    type: InfoActionTypes.SET_TITLE;
    payload: string
}

export interface ISetChatIdAction {
    type: InfoActionTypes.SET_CHATID;
    payload: string
}



export type InfoAction = ISetTitleAction  | ISetChatIdAction 