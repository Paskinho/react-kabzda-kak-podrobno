import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Select} from "./components/Select/Select";

function App(props:any) {

    let[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let[onOffChange,setOnOffChanged]=useState<boolean>(true)


    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} items={[]} onClick={()=>{}}/>
            <OnOff on={onOffChange} onChange={setOnOffChanged}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            {/*<Select value={"Hello"} onClick={()=>{alert("Hello")}} items={[{title: "sadf", value: 1}]}/>*/}
        </div>
    );
}

export default App;
