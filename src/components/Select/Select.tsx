import React, {KeyboardEvent , useState} from "react";
import styles from "./Select.module.css"


type ItemType = {
    title: string,
    value: any
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i=0; i<props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                setHoveredElementValue(props.items[i+1].value);
            }
        }
    }



    return (
        <>

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex = {0}>

                <span className={styles.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                            onClick={()=>{onItemClick(i.value)}}
                            key={i.value}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )

}



