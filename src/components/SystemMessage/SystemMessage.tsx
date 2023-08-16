import { FC } from "react";
import { ISystemMessage } from "../../interface/SystemMessage";
import dayjs from "dayjs";


export const SystemMessage: FC<ISystemMessage> = (props: ISystemMessage) => {

    const {date} = props;

    return(
        <div>
            {dayjs(Number(date) * 1000).format('DD.MM.YYYY')}
        </div>
    )
}   