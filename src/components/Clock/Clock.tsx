import React, {useEffect, useState} from "react"

type PropsType = {
mode?: 'analog' | "digital"
}
const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    useEffect(()=> {
       const intervalId = setInterval(()=> {
            setDate(new Date())
        },1000);
        return () => {
            clearInterval(intervalId)
        }

    },[])

 let view;


    switch (props.mode) {
    case 'analog' :
    view = <span>ANALOG</span>
    break;
    case 'digital' :
        default:
            view = <> <span>{getTwoDigitsString(date.getHours())}</span>
        :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
                </>
    }

    return <div>
        {view}
    </div>
}