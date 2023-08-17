import { FC } from "react";
import { ISystemMessage } from "../../interface/SystemMessage";
import dayjs from "dayjs";
import './systemMessage.sass';


export const SystemMessage: FC<ISystemMessage> = (props: ISystemMessage) => {

    const {date} = props;

    return(
        <div className="systemMessage">
            {dayjs(Number(date) * 1000).format('DD.MM.YYYY')}
        </div>
    )
}   