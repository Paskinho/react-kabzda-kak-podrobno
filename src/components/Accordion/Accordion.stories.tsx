import  {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default  {
    title: "Accordion",
    component: Accordion
}

const callback = action("accordion mode change event");
const onClickCallback = action ("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={true}
                                                  onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UserUncollapsedMode = () => <Accordion titleValue={"Users"}
                                                    collapsed={true} onChange={callback}
                                                    items={[{title:"Virgil", value:1},{title: "Trent",value:2}, {title:"Thiago",value:3},{title: "Mohamed", value:4}]}
                                                    onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=> setValue(!value)}
                      items={[{title:"Virgil", value:1},{title: "Trent",value:2}, {title:"Thiago",value:3},{title: "Mohamed", value:4}]}
    onClick={(value)=>{alert ("user with ID ${value} should be happy")}}
    />
}


