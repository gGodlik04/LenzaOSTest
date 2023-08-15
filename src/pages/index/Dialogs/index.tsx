import React, {FC, useEffect} from "react";
import {IPage} from "../../../interface/page";
import { ChatItemList } from "../../../components/ChatItemList/ChatItemList";



export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;


    return (
        <div className="PageIndex">
                <ChatItemList/>
        </div>
    )
}