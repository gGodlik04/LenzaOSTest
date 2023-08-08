import { createReducer } from "@reduxjs/toolkit"
import { IFetchMessageErrorAction, IFetchMessageSuccessAction, IMessageState, MessageActionTypes } from "../../types/message";




const initialState: IMessageState  = {
    message: [],
    loading: false,
    error: null 
}




export default createReducer (initialState, builder => {
    builder

        .addCase(MessageActionTypes.FETCH_MESSAGE, (state) => {
            state.loading = true; state.error = null; state.message = []; 
        })

        .addCase(MessageActionTypes.FETCH_MESSAGE_SUCCESS, (state,action: IFetchMessageSuccessAction) => {
            state.loading = false; state.error = null; state.message = action.payload;
        })

        .addCase(MessageActionTypes.FETCH_MESSAGE_ERROR, (state, action: IFetchMessageErrorAction) => {
            state.loading = true; state.error = action.payload; state.message = [];
            
        })
}) 