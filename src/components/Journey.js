import React from 'react'


function Journey(props){
    console.log(props.img);
    return(
        <div className='journey-container'>
            <img
            className='journey-image'
                src={`./images/${props.img}`}
            />
            <div className = "journey-details-container">
                <div className='journey-country'>
                    <span className='journey-countryName'>{props.countryName}</span>
                    <a href=''>View on Google Maps</a>
                </div>
                <div>
                    <h2 className='journey-placeName'>{props.placeName}</h2>
                    <span className='journey-date'>{props.date}</span>
                    <p className='journey-aboutJourney'>{props.aboutJourney}</p>
                </div>
            </div>
        </div>
    )
}

export default Journey