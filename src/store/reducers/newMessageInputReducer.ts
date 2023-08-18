import { createReducer } from "@reduxjs/toolkit"
import { INewMessageInput, ISetNewMessageInputTextAction, NewMessageInputActionTypes } from "../../types/newMessageInput";




const initialState: INewMessageInput  = {
    textOfMessage:[]
}




export default createReducer (initialState, builder => {
    builder

        .addCase(NewMessageInputActionTypes.SET_TEXT, (state, action: ISetNewMessageInputTextAction) => {
            state.textOfMessage.push(action.payload);
        })


        
}) 