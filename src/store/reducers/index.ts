import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
import infoReducer from "./infoReducer";
import newMessageInputReducer from "./newMessageInputReducer";



export const rootReducer = combineReducers({
    chat: chatReducer,
    message: messageReducer,
    info: infoReducer,
    newMessage: newMessageInputReducer
})

export type RootState = ReturnType<typeof rootReducer>