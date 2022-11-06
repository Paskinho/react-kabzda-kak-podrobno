import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    return (
        <div className="App">
            {/*<OnOff/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;
