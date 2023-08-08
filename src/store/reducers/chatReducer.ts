import { createReducer } from "@reduxjs/toolkit"
import { ChatsActionTypes, IChatState, IFetchChatErrorAction, IFetchChatSuccessAction } from "../../types/chat"


const initialState: IChatState  = {
    chats: [],
    loading: false,
    error: null 
}




export default createReducer (initialState, builder => {
    builder

        .addCase(ChatsActionTypes.FETCH_CHATS, (state) => {
            state.loading = true; state.error = null; state.chats = []; 
        })

        .addCase(ChatsActionTypes.FETCH_CHATS_SUCCESS, (state,action: IFetchChatSuccessAction) => {
            state.loading = false; state.error = null; state.chats = action.payload;
        })

        .addCase(ChatsActionTypes.FETCH_CHATS_ERROR, (state, action: IFetchChatErrorAction) => {
            state.loading = true; state.error = action.payload; state.chats = [];
            
        })
}) 