import React, {FC, useEffect} from "react";
import './fonts.scss';
import {IPage} from "../../interface/page";
import { ChatItemList } from "../../components/ChatItemList/ChatItemList";
import './interface.sass'
import { Header } from "../../components/Header/Header";
import { Message } from "../../components/Message/Message";
import {Input} from "../../components/Input/Input";



export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;


    return (
        <div className="PageIndex">
                <div className="pageIndex-title">All chats</div>
                <Header/>
                <ChatItemList/>
                <Message/>
                <Input/>
        </div>
    )
}