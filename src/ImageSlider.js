// your ImageSlider code here!
import React from 'react';
import { Component } from "react"

class ImageSlider extends Component {
    constructor(){
        super()
        this.state={
            currentSlideIndex: 0
        }
    }
    
    render(){
        let CURRENT_SLIDE = this.state.currentSlideIndex
        return(
            
        <h1>I am on slide {CURRENT_SLIDE}</h1>
       )
    }
}

export default ImageSlider