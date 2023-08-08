import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";



export const rootReducer = combineReducers({
    chat: chatReducer,
    message: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>