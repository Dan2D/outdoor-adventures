import React from 'react';
import SVG from 'react-inlinesvg';

function ExploreMsg() {
    return (
        <div className='explore-msg-container'>
            <h1>Last Rentals and Reservations</h1>
            <div className='explore-msg__row'>
                <p>The last rental of the day is available 1 hour before closing and all rentals must be returned before closing hour.</p>
                <SVG className='explore-msg__svg' src={require("../../images/icons/hours-icon.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="white"')}/>
            </div>
            <div className='explore-msg__row explore-msg__row--reverse'>
            <SVG className='explore-msg__svg' src={require("../../images/icons/bell-icon.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="white"')} />
                <p>Reservations are only abailable for guided tours. Rentals are ron on a first-come, first-serve basis</p>
                
            </div>
            <div className='explore-msg__row'>
                <p>If you're interested in staying out later, check out some of our sunset and late night tours!</p>
                <SVG className='explore-msg__svg' src={require("../../images/icons/moon-icon.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="white"')} />
            </div>
            <div className='explore-msg__sun-container'>
                <div className='explore-msg__sun'/>
            </div>
        </div>
    )
}

export default ExploreMsg
