import { createReducer } from "@reduxjs/toolkit"
import { IInfo, ISetChatIdAction, ISetTitleAction, InfoActionTypes } from "../../types/info";




const initialState: IInfo  = {
    title:'',
    chatId:''
}




export default createReducer (initialState, builder => {
    builder

        .addCase(InfoActionTypes.SET_CHATID, (state, action: ISetChatIdAction) => {
            state.chatId = action.payload;
        })

        .addCase(InfoActionTypes.SET_TITLE, (state, action: ISetTitleAction) => {
            state.title = action.payload; 
            
        })

}) 