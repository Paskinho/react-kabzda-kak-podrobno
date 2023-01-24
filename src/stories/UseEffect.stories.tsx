import React, {useEffect, useState} from 'react'

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [fake,setFake] = useState(1)
const [counter,setCounter] = useState(1)


console.log("SimpleExample");

useEffect(()=> {
    console.log("useEffect every render");
    document.title = counter.toString()
})

    useEffect(()=> {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString()
    })

    useEffect(()=> {
        console.log("useEffect only first render and every counter change");
        document.title = counter.toString()
    })

    return <>
    Hello,{counter} {fake}
        <button onClick={() => {
        setFake(fake+1)}
        }>fake+</button>
        <button onClick={() => {
            setCounter(counter+1)}
        }>counter+</button>
    </>


}

export const SetTimeoutExample = () => {
    const [fake,setFake] = useState(1)
    const [counter,setCounter] = useState(1)


    console.log("SetTimeoutExample");

    useEffect(()=> {
        setTimeout (()=> {
            console.log('SetTimeout')
            document.title = counter.toString();
        }, 1000)
    }, [counter])



    return <>
        Hello,{counter} {fake}
        <button onClick={() => {
            setFake(fake+1)}
        }>fake+</button>
        <button onClick={() => {
            setCounter(counter+1)}
        }>counter+</button>
    </>


}