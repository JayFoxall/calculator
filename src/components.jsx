import { React } from "react";
import * as actions from './Store/actions'

export function Keypad(){

let buttons =[]

function button(id, action, )

    return (
        buttons
            .map(button => <Button details={button}/>)
    )
}

export function Button(props){
    return (
       <>{props.details}</>
    )
}