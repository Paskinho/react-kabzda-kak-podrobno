import React, {useState} from "react";
// import {action} from @storybook
// import {Button} from @storybook

export default {
    title: "input",
    // component: input
}

export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
    const [value,setValue] = useState("")
    return<><input onChange={(event) => {
       const actualValue = event.currentTarget.value

    }}/> - {value} </>;
}

export const ControlledInputWithFixedValue = ()=> <input value={"int-incubator.by"}/>