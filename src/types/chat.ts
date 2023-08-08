import { createAction, createReducer } from "@reduxjs/toolkit";



export interface IChatState {
    chats: any[];
    loading: boolean;
    error: null | string;

}

export enum ChatsActionTypes {
    FETCH_CHATS = 'FETCH_CHATS',
    FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS',
    FETCH_CHATS_ERROR = 'FETCH_CHATS_FETCH_CHATS_ERROR',
}

export interface IFetchChatAction {
    type: ChatsActionTypes.FETCH_CHATS;
}

export interface IFetchChatSuccessAction {
    type: ChatsActionTypes.FETCH_CHATS_SUCCESS;
    payload: any[]
}

export interface IFetchChatErrorAction {
    type: ChatsActionTypes.FETCH_CHATS_ERROR;
    payload: string;
}



export type ChatsAction = IFetchChatAction | IFetchChatSuccessAction | IFetchChatErrorAction