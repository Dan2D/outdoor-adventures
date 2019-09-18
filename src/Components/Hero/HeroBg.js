import React, {Component} from 'react'
import SVG from 'react-inlinesvg';

class HeroBg extends Component {

    render() {
        console.log("Test")
        return (
            <div className='hero-bg'>
                <SVG className='hero__mtn-bg' src={require("../../images/mtn-bg.svg")} />
                <SVG className='hero__clouds-bg hero__clouds-bg--A' src={require("../../images/clouds-bg.svg")}/>
                <SVG className='hero__clouds-bg hero__clouds-bg--B' src={require("../../images/clouds-bg.svg")}/>
            </div>
        )
    }
}



export default HeroBg
