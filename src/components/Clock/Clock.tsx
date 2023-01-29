import React, {useEffect, useState} from "react"

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    useEffect(()=> {
        setInterval(()=> {
            setDate(new Date())
        },1000)
    },[])

    const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num

    const hoursString = getTwoDigitsString(date.getHours())
    const minutesString = getTwoDigitsString(date.getMinutes())
    const secondsString = getTwoDigitsString(date.getSeconds())





    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>

    </div>
}