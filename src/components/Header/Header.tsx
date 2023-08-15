import {FC, useContext, useEffect, useState} from "react";
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { IHeader } from "../../interface/Header";
import "./header.sass";


export const Header: FC<IHeader> = (props: IHeader) => {
    // const {title} = props;
    const {chats, error, loading} = useTypedSelector(state => state.chat);
    const {title} = useTypedSelector(state => state.info)

    useEffect(() => {
        console.log(title);
    },[])
    
    if (loading) {  
        return <h3>Загрузка...</h3>
    }
    
    return (
        <div className="Header">
            {title}
        </div>
    )
}