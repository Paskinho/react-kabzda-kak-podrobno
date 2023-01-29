import  {useState} from "react";
import {Clock} from "./Clock";
import {action} from "@storybook/addon-actions";

export default  {
    title: "Clock",
    component: Clock
}


export const BaseExample = () => {
    return <Clock/>

}

