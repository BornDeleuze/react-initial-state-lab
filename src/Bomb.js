// your Bomb code here!
import React from 'react';
import { Component } from "react"

class Bomb extends Component {
    constructor(props){
        super()
        this.state={
            secondsLeft: props.initialCount
        }
    }
    
    render(){
        let SECONDS_LEFT = this.state.secondsLeft
        if (SECONDS_LEFT > 0){
            return(
                
            <h1>{SECONDS_LEFT} seconds left before I go boom!</h1>
        )}
        return(
            <h1>Boom!</h1>
        )
    }
}
export default Bomb