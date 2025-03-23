import React, { Component } from "react"
import LowerAbout from "./LowerAbout";
import UperAbout from "./UperAbout";
import "./UperAbout.css"

export default class MainAbout extends Component{
    render(){
        return(
            <>
            <UperAbout/>
            <LowerAbout />
            </>
        )
    }
}