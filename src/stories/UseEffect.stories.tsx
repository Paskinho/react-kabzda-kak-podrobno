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
        setInterval (()=> {
           setCounter(state => state + 1);
        }, 1000)
    }, [])



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


export const ResetEffectExample = () => {
    const [counter,setCounter] = useState(1)


    console.log("Component rendered" + counter);

    useEffect(()=> {
       console.log("Effect occured:" + counter)
        return ()=>{
            console.log("RESET EFFECT" + counter)
        }

    }, [counter])

    const increaseHandler = ()=> {setCounter(counter + 1)}

    return <>
    Hello, counter: {counter} <button onClick={increaseHandler}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text,setText] = useState('')


    console.log("Component rendered with" + text);

    useEffect(()=> {

        const handler = (e: KeyboardEvent)=> {
            console.log(e.key)
            setText(state => state + e.key)
        }

        window.document.addEventListener('keypress',handler )

        return ()=> {
            window.removeEventListener('keypress', handler)}

    }, [])



    return <>
        Typed Text: {text}
    </>
}


