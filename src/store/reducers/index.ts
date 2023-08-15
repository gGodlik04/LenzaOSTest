import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
import infoReducer from "./infoReducer";



export const rootReducer = combineReducers({
    chat: chatReducer,
    message: messageReducer,
    info: infoReducer
})

export type RootState = ReturnType<typeof rootReducer>