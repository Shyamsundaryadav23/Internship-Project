import React from 'react'
import MapComponent from './MapComponent'

const PropertyMapInfo = ({address}) => {
  return (
    <>
    <div className='map-image-container col-md-6 col-sm-12 col-12'>
        <h2 className='map-header'>Where you'll be</h2>
        <MapComponent address={address}/>
    </div>
    <div className='extra-info col-md-6 col-sm-12 col-12'>
        <h2 className='extra-heading'>
           Extra Info 
        </h2>
        <p className='extra-description'>
           -Check-in time is 1 pm & Check-out time is 10 am.
           Early Check-in or late check-out is permitted based on availability and prior intimation.
           *Based on availability, early checkin ispermitted form 10 am onwards.
           If you wish to check-in before 10 am , an early check-in fee will be applicable.
           *Late checkout is permitted based on availability and a fee may be applicable based on checkout time.
           Please contact host regarding the same.
           -No smoking
           -No pets
        </p>
    </div>
    </>
  )
}

export default PropertyMapInfo
